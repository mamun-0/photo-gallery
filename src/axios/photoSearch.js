import axios from "axios";
const searchPhoto = async (searchKey) => {
  const listOfPhotos = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      headers: {
        Authorization: `${process.env.REACT_APP_UNSPLASH_API_KEY}`,
      },
      params: {
        query: searchKey,
      },
    }
  );
  return listOfPhotos;
};
export default searchPhoto;
