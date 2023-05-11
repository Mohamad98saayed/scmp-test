import axios from "axios";

//Get a specific event by it's id
const getEventById = async (id) => {
  const response = await axios.get(`/api/v1/event/${id}`);
  return response.data;
};

const oneEventService = { getEventById };
export default oneEventService;
