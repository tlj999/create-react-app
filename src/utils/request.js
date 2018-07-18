import Axios from 'axios';

// const APPID = 'wxa5235924e6d1bcbc'
const axiosRequest = async(params = {}, url) => {
  let data = params.query || {}
  // data.appid = APPID
  let res = await Axios({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: { 'Content-Type': params.method === 'POST' ? 'application/x-www-form-urlencoded' : 'application/json' }
  })
  return res
}

export default axiosRequest;
