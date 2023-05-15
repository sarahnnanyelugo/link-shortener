import axios from "axios";
import { Endpoints } from "./Endpoints";
// import React, { useState, useEffect } from "react";
const base_url = Endpoints.base_url;

export function GetData({ endpoint }) {
  //   const [responseData, setResponseData] = useState(null);
  return axios
    .get(base_url + endpoint)
    .then((response) => {
      // Handle successful response
      // console.log(response.data);
      //   setResponseData(response.data);
    })
    .catch((error) => {
      // Handle error
      console.log(error);
      //   setResponseData(error);
    });
}

export function PostData(props) {
  //   const [responseData, setResponseData] = useState(null);
  let full_path = base_url + props.endPoint;
  //   useEffect(() => {
  return axios
    .post(full_path, props.data)
    .then((response) => {
      //   console.log(response.data);
      return response.data;
      // setResponseData(response.data);
    })
    .catch((error) => {
      //   console.log(error);
      // setResponseData(error);
      return error;
    });
}
