"use strict";

const users = [
  { id: 1, name: "Test", isMale: false, birthday: null },
  { id: 2, name: "John" },
];

// js -> json
const usersInJson = JSON.stringify(users);
console.log(usersInJson);
//[{"id":1,"name":"Test","isMale":false,"birthday":null},{"id":2,"name":"John"}]

// json -> js
const usersFromJson = JSON.parse(usersInJson);
console.log(usersFromJson);
