import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://healthcare-server-wheat.vercel.app',
  });

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
