import axios from "axios";

const journalAPI = axios.create({
  baseURL: `https://vue-demos-5c764-default-rtdb.firebaseio.com`,
});
export default journalAPI;
