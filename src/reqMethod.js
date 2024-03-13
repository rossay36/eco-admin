import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
  .currentUser?.accessToken;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2RmMjk4MmYyOGYzMWY0ODdkNjE5ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDE0OTkzMiwiZXhwIjoxNzEwNDA5MTMyfQ.iuKPcsES4dYFTKbpUlTWMKgrW6TuHSNob5ldPEV8QMc";

const reqToken = TOKEN || token;

export const publicReq = axios.create({
  baseURL: BASE_URL,
});

export const userReq = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${reqToken}` },
});
