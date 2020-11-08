const axios = require("axios");

export async function searchItem(inputstring: string) {
  const url = "http://localhost:8000/api/item/" + inputstring;
  let res = await axios.get(url, {
    headers: { "Access-Control-Allow-Origin": "*" }
  });
  let data = res.data;
  console.log(data);
}
