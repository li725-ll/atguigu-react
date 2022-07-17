import request from "../utils/request";

const commodity = {
  getCategoryList: () => request.get("/manage/category/list"),
  addCommodityCategory: (data)=> request.post("/manage/category/add",data)
};


export default commodity;
