import axios from "axios";
import { authHeader } from "./auth-header";

//let url = window.location.href;
//let arr = url.split("/");
//let host = arr[0] + "//" + arr[2] + "/";
let host = "http://192.168.29.191:5000/";

export const postData = function (uri, data) {
  return new Promise(function (resolve, reject) {
    axios(host + uri, {
      method: "POST",
      data: data,
      headers: authHeader(),
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const getInvoiceDetails = function (query) {
  return new Promise(function (resolve, reject) {
    axios(
      "/api/invoice/getdetails?invoiceNo=" +
        query.invoiceNo +
        "&role=" +
        query.role,
      {
        method: "GET",
        headers: authHeader(),
      }
    )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
