import { call, put } from "redux-saga/effects";

import api from "../../../service/api";
import { loadSuccess, loadFailure } from "./actions";

export function* load() {
  try {
    const response = yield call(api.get, "users/diego3g/repos");
    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}