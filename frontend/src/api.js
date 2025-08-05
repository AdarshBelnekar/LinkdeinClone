// src/api.js
import axios from "axios";

export const API = axios.create({
  baseURL: "https://linkdeinclone.onrender.com/api", // Correct: Express server URL
});

