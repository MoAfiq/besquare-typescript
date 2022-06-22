interface Name {
  first: string;
  second: string;
}

var name_object: Name;
name_object = {
  first: "John",
  second: "Doe",
};

name_object = {
  // Error : `second` is missing
  first: "John",
};
name_object = {
  // Error : `second` is the wrong type
  first: "John",
  second: 1337,
};
