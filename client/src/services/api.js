import axios from "axios";

const uri = "http://localhost:8000";

export const lessionApiRequest = async () => {
  const response = await axios.get(`${uri}/api/lessions`);
  return response.data;
};

export const loginApiRequest = async (data) => {
  const response = await axios.post(`${uri}/api/token`, data);
  return response.data;
};
