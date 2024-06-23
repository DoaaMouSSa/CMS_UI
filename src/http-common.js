import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4220/api/",
  headers: {
    "Content-type": "application/json"
  }
});