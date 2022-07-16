import request from "../utils/request";

const commodity = {
  getCategoryList: () => request.get("/manage/category/list")
};

export default commodity;
