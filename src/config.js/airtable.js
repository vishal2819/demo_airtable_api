import axios from "axios";

const airtableClient = axios.create({
  baseURL: "https://api.airtable.com/v0",
  headers: {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    "Content-Type": "application/json",
  },
});

export default airtableClient;
