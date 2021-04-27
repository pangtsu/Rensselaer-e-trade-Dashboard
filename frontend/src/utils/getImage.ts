const axios = require("axios");

export async function getImage(imageID: string) {
  const url = "http://localhost:8080/api/file/" + imageID;
  let res = await axios.get(url, {
    headers: { "Access-Control-Allow-Origin": "*" }
  });
  let data = res.data;
  return data;
}
