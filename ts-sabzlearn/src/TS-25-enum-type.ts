/**
 * TS-25-enum-type
 */

enum Role {
  ADMIN,
  USER,
  AUTHOR,
}

const userDashboard: {
  id: number;
  name: string;
  age: number;
  role: Role;
} = {
  id: 1,
  name: "sal3h",
  age: 26,
  role: Role.ADMIN,
};

/**
 * define enum type
 * ---------------- */
enum ActionsTask {
  GET = 0,
  POST, // -> auto define POST: 1
  ADD = "add",
  REMOVE = "remove",
  UPDATE = "update",
}
