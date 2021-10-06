import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Course } from "../utils/types";

interface Props {
  className?: string;
  course: Course;
}

const Info = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="">
      <button
        className="rounded-full shadow-md bg-yellow-100 border border-gray-300 w-8 h-8"
        onClick={() => {
          setOpen(true);
        }}
      >
        ?
      </button>
      <Dialog
        className={`${props.className} fixed z-10 inset-0 overflow-y-auto`}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-white rounded-lg p-2 max-w-sm mx-auto prose">
            <Dialog.Title>Informacje</Dialog.Title>
            <Dialog.Description></Dialog.Description>

            <p>{props.course.notes}</p>

            <button
              className="bg-green-700 text-white rounded-lg p-2"
              onClick={() => setOpen(false)}
            >
              Ok
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Info;
