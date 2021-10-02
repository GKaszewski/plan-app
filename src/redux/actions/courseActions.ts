import { Course, FilteredCoursesByDay } from "../../utils/types";

export const FILTER_COURSES_BY_DAY = "FILTER_COURSES_BY_DAY";
export const FILTER_COURSES_BY_GROUP = "FILTER_COURSES_BY_GROUP";

interface FilterCoursesByDayAction {
  type: typeof FILTER_COURSES_BY_DAY;
  payload: FilteredCoursesByDay;
}

interface FilterCoursesByGroupAction {
  type: typeof FILTER_COURSES_BY_GROUP;
  payload: Course[];
}

export type CourseActions =
  | FilterCoursesByDayAction
  | FilterCoursesByGroupAction;

export const filterCoursesByDayAction = (
  courses: FilteredCoursesByDay
): CourseActions => {
  return {
    type: FILTER_COURSES_BY_DAY,
    payload: courses,
  };
};

export const filterCoursesByGroupAction = (
  courses: Course[]
): CourseActions => {
  return {
    type: FILTER_COURSES_BY_GROUP,
    payload: courses,
  };
};
