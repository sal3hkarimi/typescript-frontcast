/**
 * TS-31-null-undefined-never
 */

type Ali = { id: 1; name: "ali"; age: 20 };
type Amin = { id: 2; name: "amin"; age: 23 };
type Sal3h = { id: 3; name: "sal3h"; age: 21 };
type Admins = Ali | Amin | Sal3h;

const adminLoginHandler = (admin: Admins) => {
  switch (admin.name) {
    case "ali": {
      return `ali logged in`;
    }
    case "amin": {
      return `amin logged in`;
    }
    case "sal3h": {
      return `sal3h logged in`;
    }
    default: {
      let neverVariable: never = admin;
      return neverVariable;
    }
  }
};

function errorMaker(msg: string, code: number): never {
  throw new Error(JSON.stringify({ message: msg, status: code }));
}

errorMaker("Not Found :(", 404);
