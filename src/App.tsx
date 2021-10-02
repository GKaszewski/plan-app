import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import CoursesList from "./components/coursesList";
import {
  filterCoursesByDay,
  filterCoursesByGroup,
} from "./redux/dispatchers/filterCourses";
import { fetchCourses } from "./utils/apiCalls";
import { Course } from "./utils/types";

function App() {
  const [selectedGroup, setSelectedGroup] = useState("");
  const { data: courses } = useQuery<Course[], Error>("courses", fetchCourses);
  const { filteredCoursesByGroup } = useSelector(
    (state: any) => state.courseReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCoursesByGroup(courses, selectedGroup));
    dispatch(filterCoursesByDay(filteredCoursesByGroup));
  }, [courses, selectedGroup]);
  return (
    <div className="flex flex-col min-h-screen h-full w-full bg-indigo-300 items-center">
      <div className="flex flex-col gap-1 self-start m-2 bg-pink-100 rounded-lg p-2">
        <h4 className="font-semibold">Legenda</h4>
        <p>
          Wykłady zdalnie -{" "}
          <span className="text-green-400 drop-shadow-lg">zielony</span>
        </p>
        <p>
          Wykłady stacj. - <span className="text-blue-400">niebieski</span>
        </p>
        <p>
          Laboratoria - <span className="text-pink-400">różowy</span>
        </p>
        <p>
          Ćwiczenia - <span className="text-yellow-400">żółty</span>
        </p>
      </div>
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
        <CoursesList />
      </div>
    </div>
  );
}

export default App;
