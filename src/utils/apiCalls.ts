import axios from "axios";
import { Course } from "./types";

export const BASE_URL = "http://localhost:5000";

export const fetchCourses = () => {
  return axios.get<Course[]>(`${BASE_URL}/api/plan`).then((res) => {
    return res.data;
  });
};

export const fetchCoursesWithGroups = (groups: string) => {
  return axios
    .post<Course[]>(`${BASE_URL}/api/plan/groups`, { groups: groups })
    .then((res) => {
      return res.data;
    });
};
