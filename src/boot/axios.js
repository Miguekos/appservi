import axios from "axios";
import qs from "qs";

const axiosInstance = axios.create({
  paramsSerializer: params => {
    return qs.stringify(params, { arrayFormat: "repeat" });
  },
  baseURL: "http://lumen-api-starter-master.test"
});

export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance;
};

export { axiosInstance };
