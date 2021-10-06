import axios from "axios";
import { Course } from "./types";

export const BASE_URL = "https://plan.gabrielkaszewski.pl";

export const fetchCourses = () => {
  return axios.get<Course[]>(`${BASE_URL}/api/plan`).then((res) => {
    return res.data;
  });
};

export const fetchCoursesWithGroups = (groups: string, calculus: string) => {
  return axios
    .post<Course[]>(`${BASE_URL}/api/plan/groups`, {
      groups: groups,
      calculus: calculus,
    })
    .then((res) => {
      return res.data;
    });
};
