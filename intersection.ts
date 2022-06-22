interface Name {
  first: string;
  second: string;
}

interface Employee {
  id: number;
  department: string;
}

type Staff = Name & Employee;

const staff: Staff = {
  first: "John",
  second: "Cena",
  id: 1,
  department: "Frontend",
};
