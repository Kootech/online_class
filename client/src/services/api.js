import axios from "axios";

const uri = "http://localhost:8000";

export const lessionApiRequest = async () => {
  const response = await axios.get(`${uri}/api/lessions`);
  return response.data;
};

export const singleLessionApiRequest = async (id) => {
  const response = await axios.get(`${uri}/api/lession/${id}`);
};

export const loginApiRequest = async (data) => {
  const response = await axios.post(`${uri}/api/token/`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
