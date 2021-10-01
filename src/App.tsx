import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import CourseWidget from "./components/course";
import Grid from "./components/grid";
import { fetchCourses } from "./utils/apiCalls";
import { Course } from "./utils/types";

function App() {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [allCourses, setAllCourses] = useState<Course[]>();
  const { data: courses, refetch } = useQuery<Course[], Error>(
    "courses",
    fetchCourses
  );

  const getFilteredData = (courses: Course[]) => {
    let _courses = [] as Course[];
    console.log(selectedGroup);

    courses?.forEach((course) => {
      if (course.group === selectedGroup || course.group === "") {
        _courses.push(course);
      }
    });
    setAllCourses(_courses);
  };

  useEffect(() => {
    getFilteredData(courses!);
  }, [courses, selectedGroup]);
  return (
    <div className="flex flex-col min-h-screen h-full w-full bg-indigo-300 items-center">
      <div className="flex gap-2 justify-center items-center">
        <p className="text-xl">Twoja grupa</p>
        <select
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
          className="w-16 h-8 outline-none"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
      <div className="m-2">
        <Grid courses={allCourses!} />
      </div>
    </div>
  );
}

export default App;
