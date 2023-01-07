import axios from "axios";

 export const apiGithub = axios.create({
    baseURL: "http://api.github.com/",
});
