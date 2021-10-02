export interface Course {
  id: number;
  day: string;
  hour: string;
  name: string;
  group: string;
  professor: string;
  room: string;
  type: string;
  notes: string;
  dateFrom: string;
  dateTo: string;
  createdAt: string;
  updatedAt: string;
}

export interface FilteredCoursesByDay {
  monday: Course[];
  tuesday: Course[];
  wednesday: Course[];
  thursday: Course[];
  friday: Course[];
}
