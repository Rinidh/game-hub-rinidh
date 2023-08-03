import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "956cea294a644314bab62320bb76efc3" //ensures that every request we send to rawg api will have this access key in the query string
  }
})