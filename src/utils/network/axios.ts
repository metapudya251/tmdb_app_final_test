import axios from "axios";

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY} `,
};

const apiMovie = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers,
});

export { apiMovie };
