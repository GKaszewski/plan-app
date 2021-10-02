import { useEffect } from "react";
import { Course } from "../utils/types";

interface Props {
  color: string;
  course: Course;
}
const CourseWidget = (props: Props) => {
  useEffect(() => {
    console.log(`Course: ${props.course}`);
  }, []);

  return (
    <div
      className={`${props.color} flex flex-col shadow-lg p-1 text-xs break-words whitespace-pre-wrap`}
    >
      <h5 className="font-semibold">{props.course.name}</h5>
      {props.course.professor && (
        <h6>
          Nauczyciel:
          <span className="font-bold">{`${props.course.professor.slice(
            0,
            50
          )}`}</span>
        </h6>
      )}
      {props.course.room && (
        <p>
          Sala: <span className="font-semibold">{props.course.room}</span>
        </p>
      )}
    </div>
  );
};

export default CourseWidget;
