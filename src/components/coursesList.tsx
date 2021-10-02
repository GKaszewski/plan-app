import { useSelector } from "react-redux";

import { Course } from "../utils/types";
import CourseWidget from "./course";

export const getBgColor = (course: Course) => {
  let color = "bg-pink-400";
  if (course.type === "lab.") color = "bg-pink-400";
  else if (course.type === "wyk.") color = "bg-blue-400";
  else if (course.type === "ćw.") color = "bg-yellow-400";
  if (course.room === "") color = "bg-green-400";
  return color;
};

const CoursesList = () => {
  const { filteredCoursesByDay } = useSelector(
    (state: any) => state.courseReducer
  );

  return (
    <div className="w-full grid md:grid-cols-5 gap-2">
      <div className="prose flex flex-col items-center m-2">
        <h2>Poniedziałek</h2>
        {filteredCoursesByDay?.monday?.map((course: Course) => {
          return (
            <div className="w-full grid grid-cols-2">
              <p>{course.hour}</p>
              <CourseWidget color={getBgColor(course)} course={course} />
            </div>
          );
        })}
      </div>
      <div className="prose flex flex-col items-center m-2">
        <h2>Wtorek</h2>
        {filteredCoursesByDay?.tuesday?.map((course: Course) => {
          return (
            <div className="w-full grid grid-cols-2">
              <p className="">{course.hour}</p>
              <CourseWidget color={getBgColor(course)} course={course} />
            </div>
          );
        })}
      </div>
      <div className="prose flex flex-col items-center m-2">
        <h2>Środa</h2>
        {filteredCoursesByDay?.wednesday?.map((course: Course) => {
          return (
            <div className="w-full grid grid-cols-2">
              <p className="">{course.hour}</p>
              <CourseWidget color={getBgColor(course)} course={course} />
            </div>
          );
        })}
      </div>
      <div className="prose flex flex-col items-center m-2">
        <h2>Czwartek</h2>
        {filteredCoursesByDay?.thursday?.map((course: Course) => {
          return (
            <div className="w-full grid grid-cols-2">
              <p className="">{course.hour}</p>
              <CourseWidget color={getBgColor(course)} course={course} />
            </div>
          );
        })}
      </div>
      <div className="prose flex flex-col items-center m-2">
        <h2>Piątek</h2>
        {filteredCoursesByDay?.friday?.map((course: Course) => {
          return (
            <div className="w-full grid grid-cols-2">
              <p className="">{course.hour}</p>
              <CourseWidget color={getBgColor(course)} course={course} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesList;
