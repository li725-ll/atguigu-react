import request from "../utils/request";

const user = {
  login: (data) => request.post("/login", data)
};

export default user;
