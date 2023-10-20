import axios from "axios";

const searchPhoto = async (searchKey) => {
  const listOfPhotos = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      headers: {
        
        Authorization: "Client-ID ZVzcnMvTUyI83Nkpc78pbfQzf4pneiZibAYLYKF66K8",
      },
      params: {
        query: searchKey,
      },
    }
  );
  return listOfPhotos;
};
export default searchPhoto;
