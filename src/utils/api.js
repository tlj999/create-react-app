import axiosRequest from './request';
const apiHost = 'https://mini.mingrilianai.com';

export const getVideoList = (params) => axiosRequest(params, apiHost + '/api/Video/GetVideoInfo');
export const getVideoInfo = (params) => axiosRequest(params, apiHost + '/api/Video/GetVideoInfo');

export const getCategoryInfos = (params) => axiosRequest(params, apiHost + '/api/CategoryInfo/GetCategoryInfos')
export const getInfolist = (params) => axiosRequest(params, apiHost + '/api/Information/GetInformationList')
export const getInfodetail = (params) => axiosRequest(params, apiHost + '/api/Information/GetInformation')
export const getInfolistBysort = (params) => axiosRequest(params, apiHost + '/api/Information/GetInformationBySort')

export const getCode = (params) => axiosRequest(params, apiHost + '/api/SMS/SendCode')
export const userLogin = (params) => axiosRequest(params, apiHost + '/api/User/Login')
export const liveVerifyToken = (params) => axiosRequest(params, apiHost + '/api/User/VerifyToken')

export const getUserWish = (params) => axiosRequest(params, apiHost + '/api/Wish/GetUserWishList')
export const getWishList = (params) => axiosRequest(params, apiHost + '/api/Wish/GetWishList')
export const saveWish = (params) => axiosRequest(params, apiHost + '/api/Wish/SaveWish')
