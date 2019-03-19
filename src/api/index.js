import axios from 'axios';

axios.defaults.baseURL = 'http://119.29.144.11:4000';

/*//处理请求成功后返回的结果
axios.interceptors.response.use((res)=>{
  return res.data;//在这了统一拦截，把结果处理成res.data
});*/

export let getSliders = () => {
  return axios.get('/sliders');
};
export let getHotGPUs = () => {
  return axios.get('/hotgpus');
};
export let getAllGPUs = () => {
  return axios.get('/gpu');
};
export let delGPU = (id)=>{
  return axios.delete(`/gpu?id=${id}`);
};
export let findGPU = (id)=>{
  return axios.get(`/gpu?id=${id}`);
};
/**
 * @param id
 * @data 数据
 * @return {AxiosPromise}
 */
export let updateGPU = (id,data)=>{
  return axios.put(`/gpu?id=${id}`,data);
};
export let addGPU = (data=>{
  return axios.post('/gpu',data);
});
export let getAll = ()=>{
  return axios.all([getSliders(),getHotGPUs()]);
};
export let pageLimit = (pageNum)=>{
  return axios.get(`/page?pageNum=${pageNum}`);
};
