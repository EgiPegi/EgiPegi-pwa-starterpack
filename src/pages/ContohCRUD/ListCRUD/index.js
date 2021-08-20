import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import DataTable from "../../../components/DataTable";
import {
  deleteAllContoh,
  deleteContoh,
  findContohByTitle,
  retrieveContoh,
} from "../../../configs/Redux/Contoh/action";

const ListCRUD = () => {
  const history = useHistory();
  const [currentContoh, setCurrentContoh] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const contoh = useSelector((state) => state.contoh);
  const dispatch = useDispatch();

  for (const key in contoh) {
    let no = parseInt(key) + 1;
    contoh[key]["no"] = no;
  }

  useEffect(() => {
    setIsLoading(true);
    dispatch(retrieveContoh())
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));
  }, [dispatch]);

  const refreshData = () => {
    setCurrentContoh(null);
  };

  const removeAllContoh = () => {
    setIsLoading(true);
    dispatch(deleteAllContoh())
      .then((response) => {
        console.log(response);
        refreshData();
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  const findByTitle = (e) => {
    setIsLoading(true);
    refreshData();
    const searchTitle = e.target.value;
    dispatch(findContohByTitle(searchTitle))
      .then((r) => setIsLoading(false))
      .catch((e) => setIsLoading(false));
  };

  const selectContoh = (contoh) => {
    setCurrentContoh(contoh);
  };
  const deleteOne = () => {
    setIsLoading(true);
    dispatch(deleteContoh(currentContoh._id))
      .then(() => {
        console.log("terhapus");
        dispatch(retrieveContoh());
        refreshData();
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  const columns = [
    {
      name: "no",
      selector: "no",
      width: "30px",
    },
    {
      name: "Judul",
      selector: "judul",
    },
    {
      name: "Dibuat",
      selector: "createdAt",
    },
    {
      name: "Update",
      selector: "updatedAt",
    },
    {
      name: "Action",
      selector: "action",
      width: "50px",
      action: (row) => (
        <div
          onClick={() => selectContoh(row)}
          style={{
            cursor: "pointer",
            backgroundColor: "mediumseagreen",
            color: "white",
            padding: 4,
            borderRadius: 4,
          }}
        >
          details
        </div>
      ),
    },
  ];

  return (
    <div className="d-flex">
      <div style={{ flex: 1 }} className="position-relative mt-3">
        <div className="position-absolute end-0 bottom-100">
          <div class="form-floating w-100 ">
            <input
              type="text"
              class="form-control"
              id="cari"
              placeholder="pencarian"
              onChange={(e) => findByTitle(e)}
            />
            <label for="cari">Cari by Judul</label>
          </div>
        </div>
        <DataTable
          loading={isLoading}
          columns={columns}
          data={contoh}
          pagination={true}
        />
      </div>
      <div className="mx-2">
        {currentContoh ? (
          <div style={{ width: 500 }}>
            <div className="mb-2 title">Detail Contoh</div>
            <div>
              <label>
                <strong className="mr-1">Judul:</strong>
              </label>{" "}
              {currentContoh.judul}
            </div>
            <div>
              <img
                src={currentContoh.img}
                alt={currentContoh.judul}
                style={{ maxHeight: 220 }}
              />
            </div>
            <div className="mt-2" />
            <button
              onClick={() =>
                history.push(`contoh-crud/do/${currentContoh._id}`)
              }
              // to={"/do/" + currentContoh._id}
              className="btn btn-warning  mr-1"
            >
              Edit
            </button>
            <button
              onClick={() => {
                if (
                  window.confirm("Hapus Contoh " + currentContoh.judul + " ?")
                ) {
                  deleteOne();
                }
              }}
              to="#"
              className="btn btn-danger mx-1"
            >
              Delete
            </button>
            <button
              onClick={() => {
                if (window.confirm("Hapus Semua Contoh ?")) {
                  removeAllContoh();
                }
              }}
              className="btn btn-secondary"
            >
              Delete All
            </button>
          </div>
        ) : (
          <div style={{ width: 500 }}>
            <div className="mb-5 title">Detail Contoh</div>
            <br />
            <p>Please click details on contoh CRUD list...</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default ListCRUD;
