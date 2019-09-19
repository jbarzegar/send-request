import { stringify } from "querystringify";
import { ParamsObject, Options, HandleResponse } from "./types";

const constructParams = (params: ParamsObject) => {
  const isEmpty = !Object.keys(params).length;

  return isEmpty ? "" : `?=${stringify(params, "&")}`;
};

async function sendRequest(
  url: string,
  handleResponse: HandleResponse,
  { params = {}, ...options }: Options = {}
) {
  const resp = await fetch(url + constructParams(params), options);

  const data = await handleResponse(resp);

  return data;
}

export default sendRequest;
