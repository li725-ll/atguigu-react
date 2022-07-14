import axios from "axios";

const instance = axios.create({
  timeout: 3000,
  baseURL: "http://localhost:3000"
})

instance.interceptors.request.use(
  (res)=>{
    return res;
  },
  (err)=>{
    throw err;
  }
)

instance.interceptors.response.use(
  (res)=>{
    if (res.data.status === 1){
      return  Promise.reject(res.data)
    }
    return Promise.resolve(res.data);
  },
  (err)=>{
    console.error(err);
    return Promise.reject(err);
  }
)

export default instance;
