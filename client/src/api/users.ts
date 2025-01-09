import axios, { AxiosResponse } from "axios";

const BASE_URL = "http://localhost:3003/api/v1";

export const apiGetAllUsers = async () => {
  try {
    const users: AxiosResponse = await axios.get(`${BASE_URL}/users`);
    return users.data.data;
  } catch (e) {
    console.log(e);
  }
};

export const apiDeleteUser = async (id: string) => {
  try {
    // const user: AxiosResponse = await axios.delete(`${BASE_URL}/users/$id`);
    console.log("user id: ", id);
  } catch (e) {
    console.log(e);
  }
};
