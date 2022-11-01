// import { useNavigate, Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import useAuth from "./useAuth";
import { baseUrl } from "../constants/constants";

const useApiClient = () => {
  const auth = useAuth();
  // const navigate = useNavigate();
  // let location = useLocation();
  const token = auth.user?._tokenResponse.idToken;
  const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  apiClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        auth.signOut();
        throw new Error("Unauthorized");
      } else {
        return Promise.reject(error);
      }
    }
  );

  // if (!auth.user || !token) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  return apiClient;
};

export default useApiClient;
