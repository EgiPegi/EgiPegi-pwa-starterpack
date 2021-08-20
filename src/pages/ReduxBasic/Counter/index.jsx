import React from "react";

import { connect } from "react-redux";

import {
  increaseCounter,
  decreaseCounter,
} from "../../../configs/Redux/Counter/actions";

function Counter(props) {
  return (
    <div>
      <div>Count: {props.count}</div>
      <button
        type="button"
        className="btn btn-danger m-2"
        onClick={() => props.decreaseCounter()}
      >
        Kurang
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.increaseCounter()}
      >
        Tambah
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
