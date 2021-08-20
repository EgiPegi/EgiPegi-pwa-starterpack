import React from "react";
import { useHistory } from "react-router-dom";
import ListCRUD from "./ListCRUD";

const ContohCRUD = () => {
  const history = useHistory();
  return (
    <>
      <div className="breadcrumb">
        <div className="bread-nav">home / basic redux</div>
        <hr />
        <div className="title">Basic Redux</div>
      </div>
      <div className="card">
        <div className="card-header">Contoh Basic Redux CRUD</div>
        <div className="card-body">
          <h5 className="card-title">CRUD Upload Foto Dengan React Redux</h5>
          <div className="card-text">
            <button
              className="btn btn-success mb-1"
              style={{ width: 150 }}
              onClick={() => history.push("contoh-crud/do")}
            >
              Add
            </button>
            <ListCRUD />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContohCRUD;
