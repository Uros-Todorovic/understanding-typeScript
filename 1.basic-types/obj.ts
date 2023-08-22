/* const person: {name: string; age: number; hobbies: string[]; role: [number, string]} = {
  name: "Urosh",
  age: 38,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
} */

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
};

const person = {
  name: "Urosh",
  age: 38,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

console.log(person);
