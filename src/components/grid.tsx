import { useEffect, useState } from "react";
import { Course } from "../utils/types";
import CourseWidget from "./course";
import EmptyCell from "./emptyCell";

interface Props {
  courses: Course[];
}

const getBgColor = (course: Course) => {
  let color = "bg-pink-400";
  if (course.type === "lab.") color = "bg-pink-400";
  else if (course.type === "wyk.") color = "bg-blue-400";
  else if (course.type === "ćw.") color = "bg-yellow-400";
  if (course.room === "") color = "bg-green-400";
  return color;
};

const Grid = (props: Props) => {
  const [eightAM, set8] = useState<Course[]>();
  const [nineAM, set9] = useState<Course[]>();
  const [tenAM, set10] = useState<Course[]>();
  const [elevenAM, set11] = useState<Course[]>();
  const [twelveAM, set12] = useState<Course[]>();
  const [onePM, set13] = useState<Course[]>();
  const [twoPM, set14] = useState<Course[]>();
  const [threePM, set15] = useState<Course[]>();
  const [fourPM, set16] = useState<Course[]>();
  const [fivePM, set17] = useState<Course[]>();
  const [sixPM, set18] = useState<Course[]>();
  const [sevenPM, set19] = useState<Course[]>();

  const sortCoursesByDay = (courses: Course[]) => {
    let monday = [] as Course[];
    let tuesday = [] as Course[];
    let wednesday = [] as Course[];
    let thursday = [] as Course[];
    let friday = [] as Course[];
    courses.forEach((course) => {
      switch (course.day) {
        case "Poniedziałek":
          monday.push(course);
          break;
        case "Wtorek":
          tuesday.push(course);
          break;
        case "Środa":
          wednesday.push(course);
          break;
        case "Czwartek":
          thursday.push(course);
          break;
        case "Piątek":
          friday.push(course);
          break;
      }
    });
    return ([] as Course[]).concat.apply([] as Course[], [
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
    ]);
  };

  const filterByHours = (courses: Course[]) => {
    let _eightAM = [] as Course[];
    let _nineAM = [] as Course[];
    let _tenAM = [] as Course[];
    let _elevenAM = [] as Course[];
    let _twelveAM = [] as Course[];
    let _onePM = [] as Course[];
    let _twoPM = [] as Course[];
    let _threePM = [] as Course[];
    let _fourPM = [] as Course[];
    let _fivePM = [] as Course[];
    let _sixPM = [] as Course[];
    let _sevenPM = [] as Course[];
    courses?.forEach((course) => {
      switch (course.hour) {
        case "8.oo":
          _eightAM.push(course);
          break;
        case "9.oo":
          _nineAM.push(course);
          break;
        case "10.oo":
          _tenAM.push(course);
          break;
        case "11.oo":
          _elevenAM.push(course);
          break;
        case "12.oo":
          _twelveAM.push(course);
          break;
        case "13.oo":
          _onePM.push(course);
          break;
        case "14.oo":
          _twoPM.push(course);
          break;
        case "15.oo":
          _threePM.push(course);
          break;
        case "16.oo":
          _fourPM.push(course);
          break;
        case "17.oo":
          _fivePM.push(course);
          break;
        case "18.oo":
          _sixPM.push(course);
          break;
        case "19.oo":
          _sevenPM.push(course);
          break;
      }
    });

    set8(sortCoursesByDay(_eightAM));
    set9(sortCoursesByDay(_nineAM));
    set10(sortCoursesByDay(_tenAM));
    set11(sortCoursesByDay(_elevenAM));
    set12(sortCoursesByDay(_twelveAM));
    set13(sortCoursesByDay(_onePM));
    set14(sortCoursesByDay(_twoPM));
    set15(sortCoursesByDay(_threePM));
    set16(sortCoursesByDay(_fourPM));
    set17(sortCoursesByDay(_fivePM));
    set18(sortCoursesByDay(_sixPM));
    set19(sortCoursesByDay(_sevenPM));
  };

  useEffect(() => {
    filterByHours(props.courses);
  }, []);

  useEffect(() => {
    filterByHours(props.courses);
  }, [props.courses]);

  return (
    <div className="w-full grid grid-cols-6 grid-rows-13 gap-2 grid-flow-row-dense">
      <p></p>
      <p>Poniedziałek</p>
      <p>Wtorek</p>
      <p>Środa</p>
      <p>Czwartek</p>
      <p>Piątek</p>
      <p>8:00</p>
      {eightAM?.map((course) => {
        let color = getBgColor(course);
        if (course.name)
          return <CourseWidget key={course.id} color={color} course={course} />;
        else return <EmptyCell />;
      })}
      <p>9:00</p>
      {nineAM?.map((course) => {
        let color = getBgColor(course);
        if (course.name)
          return <CourseWidget key={course.id} color={color} course={course} />;
        else return <EmptyCell />;
      })}
      <p>10:00</p>
      {tenAM?.map((course) => {
        let color = getBgColor(course);
        if (course.name)
          return <CourseWidget key={course.id} color={color} course={course} />;
        else return <EmptyCell />;
      })}
      <p>11:00</p>
      {elevenAM?.map((course) => {
        let color = getBgColor(course);
        if (course.name)
          return <CourseWidget key={course.id} color={color} course={course} />;
        else return <EmptyCell />;
      })}
      <p>12:00</p>
      {twelveAM?.map((course) => {
        let color = getBgColor(course);
        if (course.name)
          return <CourseWidget key={course.id} color={color} course={course} />;
        else return <EmptyCell />;
      })}
      <p>13:00</p>
      {onePM?.map((course) => {
        let color = getBgColor(course);
        if (course.name)
          return <CourseWidget key={course.id} color={color} course={course} />;
        else return <EmptyCell />;
      })}
      <p>14:00</p>
      {twoPM?.map((course) => {
        let color = getBgColor(course);
        if (course.name)
          return <CourseWidget key={course.id} color={color} course={course} />;
        else return <EmptyCell />;
      })}
      <p>15:00</p>
      {threePM?.map((course) => {
        let color = getBgColor(course);
        if (course.name)
          return <CourseWidget key={course.id} color={color} course={course} />;
        else return <EmptyCell />;
      })}
      <p>16:00</p>
      {fourPM?.map((course) => {
        let color = getBgColor(course);
        if (course.name)
          return <CourseWidget key={course.id} color={color} course={course} />;
        else return <EmptyCell />;
      })}
      <p>17:00</p>
      {fivePM?.map((course) => {
        let color = getBgColor(course);
        if (course.name)
          return <CourseWidget key={course.id} color={color} course={course} />;
        else return <EmptyCell />;
      })}
      <p>18:00</p>
      {sixPM?.map((course) => {
        let color = getBgColor(course);
        if (course.name)
          return <CourseWidget key={course.id} color={color} course={course} />;
        else return <EmptyCell />;
      })}
      <p>19:00</p>
      {sevenPM?.map((course) => {
        let color = getBgColor(course);
        if (course.name)
          return <CourseWidget key={course.id} color={color} course={course} />;
        else return <EmptyCell />;
      })}
    </div>
  );
};

export default Grid;
