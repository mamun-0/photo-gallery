import axios from "axios";
export default async function photoFetch(
  url = "http://localhost:3001/pictures"
) {
  try {
    return await axios.get(url);
  } catch (err) {
    console.log(err.message);
  }
}
