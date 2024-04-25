/* istanbul ignore file */
import axios from "axios";
import React, { useEffect, useMemo, useState, useCallback } from "react";
// import logoPath from "../images/csc-logo.gif";

export const axiosapi = axios.create(); // export this and use it in all your components

const useAxiosLoader = () => {
  const [counter, setCounter] = useState(0);
  const inc = useCallback(
    () => setCounter((counter) => counter + 1),
    [setCounter]
  ); // add to counter
  const dec = useCallback(
    () => setCounter((counter) => counter - 1),
    [setCounter]
  ); // remove from counter

  const interceptors = useMemo(
    () => ({
      request: (config) => (inc(), config),
      response: (response) => (dec(), response),
      error: (error) => (dec(), Promise.reject(error)),
    }),
    [inc, dec]
  ); // create the interceptors

  useEffect(() => {
    let doc = document.getElementsByClassName("load-indicator")[0]
      ? document
          .getElementsByClassName("load-indicator")[0]
          .setAttribute("style", "display:none")
      : "";
    axios.interceptors.request.use(
      function (config) {
        // Do something before request is sent

        let doc = document.getElementsByClassName("load-indicator")[0]
          ? document
              .getElementsByClassName("load-indicator")[0]
              .setAttribute("style", "display:block")
          : "";
        return config;
      },
      function (error) {
        let doc = document.getElementsByClassName("load-indicator")[0]
          ? document
              .getElementsByClassName("load-indicator")[0]
              .setAttribute("style", "display:none")
          : "";

        // When request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger

        let doc = document.getElementsByClassName("load-indicator")[0]
          ? document
              .getElementsByClassName("load-indicator")[0]
              .setAttribute("style", "display:none")
          : "";
        return response;
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        let doc = document.getElementsByClassName("load-indicator")[0]
          ? document
              .getElementsByClassName("load-indicator")[0]
              .setAttribute("style", "display:none")
          : "";
        return Promise.reject(error);
      }
    );
  }, [interceptors]);
  return [counter > 0];
};
const GlobalLoader = () => {
  useAxiosLoader();
  return (
    <div className="load-indicator">
      {/* <img className="spinner" alt="CSC logo" src={logoPath} /> */}
    </div>
  );
};
export default GlobalLoader;
