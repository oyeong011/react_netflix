import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params : {
        api_key : "4036ea10d60c0a0652536f8d94f36a3b",
        language : "ko-KR"
    }
});

export default instance;