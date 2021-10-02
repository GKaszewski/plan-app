import { Course, FilteredCoursesByDay } from "../../utils/types";
import {
  CourseActions,
  FILTER_COURSES_BY_DAY,
  FILTER_COURSES_BY_GROUP,
} from "../actions/courseActions";

interface State {
  filteredCoursesByDay: FilteredCoursesByDay | null;
  filteredCoursesByGroup: Course[];
}

const initialState: State = {
  filteredCoursesByGroup: [],
  filteredCoursesByDay: null,
};

export const courseReducer = (
  state = initialState,
  action: CourseActions
): State => {
  switch (action.type) {
    case FILTER_COURSES_BY_DAY:
      return {
        ...state,
        filteredCoursesByDay: action.payload,
      };
    case FILTER_COURSES_BY_GROUP:
      return {
        ...state,
        filteredCoursesByGroup: action.payload,
      };
    default:
      return state;
  }
};
