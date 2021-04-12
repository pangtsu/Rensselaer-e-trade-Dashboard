const axios = require("axios");

export async function getAllItems() {
  const url = "http://localhost:8080/api/item/all";
  let res = await axios.get(url, {
    headers: { "Access-Control-Allow-Origin": "*" }
  });
  let data = res.data;
  console.log(data);
  return data;
}