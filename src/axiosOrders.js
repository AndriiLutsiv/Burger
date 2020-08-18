import * as axios from "axios";
const instance = axios.create({
  baseURL: "https://burgerbase-43af3.firebaseio.com/",
});
export default instance;
