import axios from "axios";

const airtableClient = axios.create({
  baseURL: "https://api.airtable.com/v0",
  headers: {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    "Content-Type": "application/json",
  },
});

airtableClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API call error:", error);
    return Promise.reject(error);
  }
);

export default airtableClient;
