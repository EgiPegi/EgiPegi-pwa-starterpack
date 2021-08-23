import {
  CREATE_CONTOH,
  RETRIEVE_CONTOH,
  UPDATE_CONTOH,
  DELETE_CONTOH,
  DELETE_ALL_CONTOH,
} from "./types";

import ContohDataService from "../../Services/Contoh";

export const createContoh = (judul, img) => async (dispatch) => {
  try {
    if (window.navigator.onLine) {
      const res = await ContohDataService.create({ judul, img });
      dispatch({
        type: CREATE_CONTOH,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } else {
      dispatch({
        type: CREATE_CONTOH,
        payload: { judul, img },
      });
      return Promise.resolve({ judul, img });
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveContoh = () => async (dispatch) => {
  try {
    if (window.navigator.onLine) {
      const local = JSON.parse(localStorage.getItem("persist:root")).contoh;
      const arrLocal = JSON.parse(local);
      for (const key in arrLocal) {
        const element = arrLocal[key];
        if (!element._id) {
          let judul = element.judul;
          let img = element.img;
          const post = await ContohDataService.create({ judul, img });
          dispatch({
            type: CREATE_CONTOH,
            payload: post.data,
          });
        }
      }
      const res = await ContohDataService.getAll();
      dispatch({
        type: RETRIEVE_CONTOH,
        payload: res.data,
      });
    } else {
      console.log("lagi offline");
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateContoh = (id, data) => async (dispatch) => {
  try {
    const res = await ContohDataService.update(id, data);

    dispatch({
      type: UPDATE_CONTOH,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteContoh = (id) => async (dispatch) => {
  try {
    await ContohDataService.remove(id);

    dispatch({
      type: DELETE_CONTOH,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllContoh = () => async (dispatch) => {
  try {
    const res = await ContohDataService.removeAll();

    dispatch({
      type: DELETE_ALL_CONTOH,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findContohByTitle = (judul) => async (dispatch) => {
  try {
    const res = await ContohDataService.findByTitle(judul);

    dispatch({
      type: RETRIEVE_CONTOH,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
