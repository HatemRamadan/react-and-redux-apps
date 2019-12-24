import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 0e0ffe490036de932dff8d788d02558e52a72b034abfcc3b9b9e0607548b8276"
  }
});
