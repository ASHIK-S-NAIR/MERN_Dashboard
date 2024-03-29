import axios from "axios";
import { API } from "../../setup/backend-manager";

// getAllSales
export const getAllSales = async () => {
  try {
    const { data } = await axios.get(`${API}/sales`);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

// updateSales
export const updateSales = async (sale) => {
  try {
    const { data } = await axios.put(`${API}/sales`, sale);
    return data;
  } catch (error) {
    return error.response.data;
  }
};
