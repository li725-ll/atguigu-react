// 设置sessionStorage
export function setSessionStorage(key, data={}){
  try{
    sessionStorage.setItem(key, JSON.stringify(data));
  }catch (error){
    throw error;
  }
}

// 获取sessionStorage
export function getSessionStorage(key){
  try{
    return JSON.parse(sessionStorage.getItem(key));
  }catch (error){
    throw error;
  }
}

// 清空sessionStorage
export function clearSessionStorage(){
  try{
    sessionStorage.clear();
  }catch (error){
    throw error;
  }
}

// 设置localStorage
export function setLocalStorage(key, data){
  try{
    localStorage.setItem(key, JSON.stringify(data));
  }catch (error){
    throw error;
  }
}

// 获取localStorage
export function getLocalStorage(key){
  try{
    return JSON.parse(localStorage.getItem(key));
  }catch (error){
    throw error;
  }
}

// 清空localStorage
export function clearLocalStorage(){
  try{
    localStorage.clear();
  }catch (error){
    throw error;
  }
}
