function printName(obj: { first: string; last?: string }) {
  console.log(obj.first + obj.last);
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
