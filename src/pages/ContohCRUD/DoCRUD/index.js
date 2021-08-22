import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
//import action redux
import {
  createContoh,
  updateContoh,
} from "../../../configs/Redux/Contoh/action";
//import services
import ContohDataService from "../../../configs/Services/Contoh";
//untuk compress foto sehingga ukuran foto menjadi lebih kecil dan mereturn ke base64 agar data bisa di simpan di database.
import compressImgB64 from "../../../core/Logic/compressImgB64";

const DoCRUD = () => {
  const history = useHistory();
  const { id } = useParams();
  //state awal
  const initialContohState = {
    _id: null,
    judul: "",
    img: "",
  };

  const [currentContoh, setCurrentContoh] = useState(initialContohState);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getContoh = (id) => {
    setIsLoading(true);

    ContohDataService.get(id)
      .then((response) => {
        setCurrentContoh(response.data);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getContoh(id);
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentContoh({ ...currentContoh, [name]: value });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const name = e.target.name;
    const base64 = await compressImgB64(file);
    console.log(base64);
    setCurrentContoh({ ...currentContoh, [name]: base64 });
  };

  const updateContent = () => {
    setIsLoading(true);
    dispatch(updateContoh(currentContoh._id, currentContoh))
      .then((response) => {
        console.log(response);

        setMessage("The Contoh was updated successfully!");
        history.push("/contoh-crud");
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  };

  const saveContent = () => {
    const { judul, img } = currentContoh;
    setIsLoading(true);

    dispatch(createContoh(judul, img))
      .then((data) => {
        setCurrentContoh({
          _id: data.id,
          judul: data.judul,
          img: data.img,
        });
        console.log(data);
        setMessage("The Contoh was create successfully!");
        history.push("/contoh-crud");
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {/* breadcrumb */}
      <div className="breadcrumb">
        <div className="bread-nav">home / {id ? "Edit CRUD" : "Add CRUD"}</div>
        <hr />
        <div className="title">{id ? "Edit CRUD" : "Add CRUD"}</div>
      </div>

      {/* Card */}
      <div className="card">
        {isLoading ? (
          <div className="loading">
            <div className="loader-md" />
          </div>
        ) : null}

        {/* TITLE  */}
        <div className="card-header">
          Contoh {id ? "Edit" : "Add"} Redux CRUD
        </div>

        {/* FORM  */}
        <div className="card-body">
          {/* BODY FORM  */}
          <div className="form-body">
            <div className="mb-3">
              <label htmlFor="judul" className="form-label">
                Judul
              </label>
              <input
                type="text"
                className="form-control"
                name="judul"
                id="judul"
                placeholder="Judul *"
                value={currentContoh.judul}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                id="img"
                name="img"
                type="file"
                onChange={handleFileUpload}
                hidden
              />

              {currentContoh.img ? (
                <>
                  <label className="btn btn-danger" htmlFor="img">
                    Change Image
                  </label>
                  <br />
                  <img
                    src={currentContoh.img}
                    id="preview"
                    alt="preview"
                    style={{
                      maxHeight: 260,
                      marginLeft: 15,
                      maxWidth: 400,
                      backgroundColor: "blue",
                    }}
                  />
                </>
              ) : (
                <>
                  <label className="btn btn-primary" htmlFor="img">
                    Choose Image
                  </label>
                  <div
                    style={{
                      height: 260,
                      marginLeft: 15,
                      width: 400,
                      backgroundColor: "Highlight",
                    }}
                  />
                </>
              )}
            </div>
          </div>
          <p>{message}</p>
          <div className="rule"></div>

          {/* FOOTER FORM  */}
          <div className="form-footer">
            <button
              className="btn btn-danger mx-1"
              onClick={() => history.goBack()}
            >
              Cancel
            </button>
            {id ? (
              isLoading ? (
                <button
                  className="btn btn-disabled"
                  disabled
                  onClick={updateContent}
                >
                  <div className="btn-loader" /> Update
                </button>
              ) : (
                <button className="btn btn-success" onClick={updateContent}>
                  Update
                </button>
              )
            ) : isLoading ? (
              <button
                className="btn btn-disabled"
                disabled
                onClick={saveContent}
              >
                <div className="btn-loader" /> Save
              </button>
            ) : (
              <button className="btn btn-success" onClick={saveContent}>
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DoCRUD;
