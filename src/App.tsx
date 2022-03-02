import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import CoursesList from "./components/coursesList";
import {
  filterCoursesByDay,
  filterCoursesByGroup,
} from "./redux/dispatchers/filterCourses";
import { fetchCoursesWithGroups } from "./utils/apiCalls";
import { Course } from "./utils/types";

function App() {
  const [selectedGroup, setSelectedGroup] = useState(() => {
    const saved = localStorage.getItem("selectedGroup");
    const initialValue = JSON.parse(saved!);
    return initialValue || "1";
  });
  const [selectedGroup2, setSelectedGroup2] = useState(() => {
    const saved = localStorage.getItem("selectedGroup2");
    const initialValue = JSON.parse(saved!);
    return initialValue || "I";
  });
  const [selectedGroup3, setSelectedGroup3] = useState(() => {
    const saved = localStorage.getItem("selectedGroup3");
    const initialValue = JSON.parse(saved!);
    return initialValue || "A";
  });
  const [group, setGroup] = useState("");
  const { data: courses, refetch } = useQuery<Course[], Error>(
    ["courses", group],
    () => {
      return fetchCoursesWithGroups(group);
    },
    { enabled: false }
  );
  const { filteredCoursesByGroup } = useSelector(
    (state: any) => state.courseReducer
  );
  const dispatch = useDispatch();

  const getGroup = () => {
    return `'${selectedGroup}', '${selectedGroup2}', '${selectedGroup3}'`;
  };

  useEffect(() => {
    const group = getGroup();
    setGroup(group);
  }, [selectedGroup, selectedGroup2, selectedGroup3]);

  useEffect(() => {
    refetch();
  }, [group]);

  useEffect(() => {
    dispatch(filterCoursesByDay(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem("selectedGroup", JSON.stringify(selectedGroup));
  }, [selectedGroup]);

  useEffect(() => {
    localStorage.setItem("selectedGroup2", JSON.stringify(selectedGroup2));
  }, [selectedGroup2]);

  useEffect(() => {
    localStorage.setItem("selectedGroup3", JSON.stringify(selectedGroup3));
  }, [selectedGroup3]);

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
      <div className="flex gap-2 flex-col md:flex-row justify-center items-center">
        <p className="text-xl">Twoja grupa</p>
        <div className="flex justify-center items-center w-full gap-2">
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="w-16 h-8 outline-none"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          {/* <select
            value={selectedGroup2}
            onChange={(e) => setSelectedGroup2(e.target.value)}
            className="w-16 h-8 outline-none"
          >
            <option value="I">I</option>
            <option value="II">II</option>
          </select> */}
        </div>
      </div>
      <div className="m-2">
        <CoursesList />
      </div>
    </div>
  );
}

export default App;
