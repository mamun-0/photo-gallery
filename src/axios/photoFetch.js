import axios from "axios";
export default async function photoFetch(
  url = "http://localhost:3001/pictures"
) {
  return await axios.get(url);
}
