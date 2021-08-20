import React from "react";
import Counter from "./Counter";
import CounterPersist from "./CounterPersist";

const index = () => {
  return (
    <>
      <div className="breadcrumb">
        <div className="bread-nav">home / basic redux</div>
        <hr />
        <div className="title">Basic Redux</div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">Basic Of Redux</div>
              <div className="card-body">
                <h5 className="card-title">Contoh Basic Redux Count</h5>
                <div className="card-text">
                  <Counter />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">Basic Of Redux Persisted</div>
              <div className="card-body">
                <h5 className="card-title">Contoh Basic Redux Count</h5>
                <div className="card-text">
                  <CounterPersist />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
