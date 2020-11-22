const axios = require("axios");

export async function createItem(params: any) {
  const paramstring = JSON.stringify(params);
  const url = "http://localhost:8000/api/item";
  let res = await axios
    .post(url, paramstring, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      console.log(response.data);
      /* do something with the response */
    })
    .catch(error => {
      console.log(error.response.data);
    });
  let data = res.data.json;
  return data;
}
