import { Course, FilteredCoursesByDay } from "../../utils/types";
import {
  filterCoursesByDayAction,
  filterCoursesByGroupAction,
} from "../actions/courseActions";

const sortCourses = (x: Course, y: Course) => {
  let xHour = Number(x.hour.split(".")[0]);
  let yHour = Number(y.hour.split(".")[0]);
  if (xHour < yHour) return -1;
  if (xHour > yHour) return 1;
  return 0;
};

export const filterCoursesByDay = (courses: Course[] | null | undefined) => {
  let _monday = [] as Course[];
  let _tuesday = [] as Course[];
  let _wednesday = [] as Course[];
  let _thursday = [] as Course[];
  let _friday = [] as Course[];

  courses?.forEach((course) => {
    switch (course.day) {
      case "Poniedziałek":
        _monday.push(course);
        break;
      case "Wtorek":
        _tuesday.push(course);
        break;
      case "Środa":
        _wednesday.push(course);
        break;
      case "Czwartek":
        _thursday.push(course);
        break;
      case "Piątek":
        _friday.push(course);
        break;
    }
  });

  let filtered: FilteredCoursesByDay = {
    monday: _monday,
    tuesday: _tuesday,
    wednesday: _wednesday,
    thursday: _thursday,
    friday: _friday,
  };

  filtered.monday = filtered.monday.sort((x, y) => sortCourses(x, y));
  filtered.tuesday = filtered.tuesday.sort((x, y) => sortCourses(x, y));
  filtered.wednesday = filtered.wednesday.sort((x, y) => sortCourses(x, y));
  filtered.thursday = filtered.thursday.sort((x, y) => sortCourses(x, y));
  filtered.friday = filtered.friday.sort((x, y) => sortCourses(x, y));

  return (dispatch: any) => {
    dispatch(filterCoursesByDayAction(filtered));
  };
};

export const filterCoursesByGroup = (
  courses: Course[] | null | undefined,
  selectedGroup: string
) => {
  let filteredCourses: Course[] = [];
  console.log(`selectedGroup: ${selectedGroup}`);

  courses?.forEach((course) => {
    if (course.group === selectedGroup || course.group === "") {
      filteredCourses.push(course);
    }
  });
  return (dispatch: any) => {
    dispatch(filterCoursesByGroupAction(filteredCourses));
  };
};
