type User = {
  name: string;
  age: number;
};

function getUser(): Promise<User> {
  return new Promise((resolve) => {
    const user: User = {
      name: "太郎",
      age: 10,
    };
    resolve(user);
  });
}

getUser().then((user: User) => {
  console.log(user);
  // @log: { "name": "太郎", "age": 10 }
});

const getMyUser = () : Promise<User> =>  {
  return new Promise((resolve) => {
    const user: User = {
      name: "太郎",
      age: 10,
    };
    resolve(user);
  });
}

getMyUser().then((user: User) => {
  console.log(user);
});
