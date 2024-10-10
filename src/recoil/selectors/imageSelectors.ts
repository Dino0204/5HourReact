import axios from "axios";
import { selector } from "recoil";
import { searchState } from "../atoms/searchState";
import { pageState } from "../atoms/pagaState";

const API_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = '2koWX1IRS_H1uUhtFS3oEGcFPC-8UMKuIoORLaaNZNM';
const PER_PAGE = 30;

export const imageData = selector({
  key: "imageData",
  get: async({get}) => {
    const searchValue = get(searchState)
    const pageValue = get(pageState)

    // API 호출
      try{
        const res = await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`)
        
        return res.data.results;
      }catch(error){
        console.log(error)
      }
  }
})