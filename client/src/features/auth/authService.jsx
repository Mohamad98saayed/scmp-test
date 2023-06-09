import axios from "axios";
const API_URL = "/api/v1/user/";

//Login user
const login = async (userData) => {
  try {
    const response = await axios.post("/api/v1/user/login", userData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    localStorage.setItem("tokenjjjjhjdgdjfgg", response.data.token);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const authService = { login };
export default authService;
