// import config from 'config';
import { postData } from "./httpClient";

export const login = function (username, password) {
  return new Promise(function (resolve, reject) {
    postData(`api/auth/login`, { username: username, password: password })
      .then((user) => {
        if (user) {
          // store user details and basic auth credentials in local storage
          // to keep user logged in between page refreshes
          console.log(user);
          //user.authdata = window.btoa(username + ":" + password);
          localStorage.setItem("vkg", JSON.stringify(user));
          resolve();
        }

        reject("Error");
      })
      .catch((err) => {
        console.log(err);
        err.response && reject(err.response.data.message);
      });
  });
};

export const signup = function (
  firstname,
  lastname,
  username,
  password,
  email,
  mobile
) {
  return new Promise(function (resolve, reject) {
    postData(`api/auth/signup`, {
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
      email: email,
      mobile: mobile,
    })
      .then((user) => {
        if (user) {
          // store user details and basic auth credentials in local storage
          // to keep user logged in between page refreshes
          console.log(user);
          //user.authdata = window.btoa(username + ":" + password);
          //localStorage.setItem("vkg", JSON.stringify(user));
          resolve(user);
        }

        reject("Error");
      })
      .catch((err) => {
        console.log(err);
        err.response && reject(err.response.data.message);
      });
  });
};

export const logout = function () {
  // remove user from local storage to log user out
  localStorage.removeItem("vkg");
};

// function getName() {
//     // remove user from local storage to log user out
//     JSON.parse(localStorage.getItem('user')).result;
// }
