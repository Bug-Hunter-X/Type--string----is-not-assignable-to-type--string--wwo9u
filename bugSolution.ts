function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

user.forEach(person => {
  console.log(greeter(person));
}); //Correct