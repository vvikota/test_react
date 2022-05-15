import axios from "axios";

const apiURL = "https://www.omdbapi.com";

const instanceAPI = axios.create({
  baseURL: apiURL,
});

const dataAPI = {
  async getFilmsData(query, currentPage) {
    try {
      const res = await instanceAPI.get(
        `?i=tt3896198&apikey=8523cbb8&s=${query}&page=${currentPage}`
      );
      // console.log(res.data)
      return res.data;
    } catch (error) {
      return error;
    }
  },
};

export default dataAPI;
