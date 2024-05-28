import axios from "axios";
import { Image } from "./components/App/App.types";

interface ApiResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "u3qo2uYj0EO8tJoWMOsjjhYe2pOYywYu2TqnyChvGG8";

export const fetchPhotos = async (
  searchQuery: string,
  currentPage: number
): Promise<Image[]> => {
  const response = await axios.get<ApiResponse>("/search/photos", {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      per_page: 10,
      page: currentPage,
    },
  });

  return response.data.results;
};
