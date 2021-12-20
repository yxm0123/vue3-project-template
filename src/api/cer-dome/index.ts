import service from "@lola/tools-axios";
import * as urls from './urls';
import * as types from './types'
export const getUser = (params?: any):Promise<types.HttpResponse<any>> => {
  return service({
    url: urls.runTest,
    method: "get",
    params
  });
};
