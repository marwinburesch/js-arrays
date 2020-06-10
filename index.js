import valueMatchesSearchString from "./utils/valueMatchesSearchString.js";
import getUserInput from "./utils/getUserInput.js";

// add event listeners to buttons
// could be moved to a function that accepts
// an element id and a function
const addUserButton = document.getElementById("addUserButton");
addUserButton.addEventListener("click", addUser);

const undoUserButton = document.getElementById("undoUserButton");
undoUserButton.addEventListener("click", undoLastAddUser);

const findUsernameButton = document.getElementById("findUsernameButton");
findUsernameButton.addEventListener("click", () =>
  findUserByName(getUserInput())
);

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => searchDb(getUserInput()));

// add input elements to get data from
const userIdInput = document.getElementById("userIdInput");
const userNameInput = document.getElementById("userNameInput");
const userSubscribe = document.getElementById("userSubscribe");

// An array of fake users
const userDb = [
  {
    id: 9875,
    name: "Dumbo",
    subscribed: true,
  },
  {
    id: 9999,
    name: "Thanh",
    subscribed: false,
  },
  {
    id: 1337,
    name: "RoboCop",
    subscribed: false,
  },
];

// Goal: get input fields values, create new user, add to userDB
function addUser() {
  let newUser = {};
  newUser.id = Number(userIdInput.value);
  newUser.name = userNameInput.value;
  userNameInput.value = "";
  userIdInput.value = "";
  newUser.subscribed = userSubscribe.checked;
  userDb.push(newUser);
  console.log(userDb);
}

// Goal: delete last entry in userDb
function undoLastAddUser() {
  const deletedUser = userDb.pop();
  console.log(`User has been deleted`);
  console.log(deletedUser);
  console.log(userDb);
}

// Goal: log first matching user by name
function findUserByName(userName) {
  const foundUser = userDb.find((userDbEntry) =>
    valueMatchesSearchString(userDbEntry.name, userName)
  );
  console.log(foundUser);
}

// Goal: log array of matching users (name, id)
function searchDb(searchValue) {
  const results = userDb.filter((userDbEntry) => {
    const objectValues = Object.values(userDbEntry);
    return objectValues.find((value) =>
      valueMatchesSearchString(value, searchValue)
    );
  });
  console.log("Result: ", results);
}
