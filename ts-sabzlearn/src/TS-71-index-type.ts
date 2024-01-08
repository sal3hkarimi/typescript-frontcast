/*
 * TS-71-index-type
 */

interface Errors {
  type: string;
  [prop: string]: string;
}

const LoginFormErrors: Errors = {
  type: "Login From",
  name: "input name is required!",
  email: "email address is required!",
  password: "",
};

const RegisterFormError: Errors = {
  type: "Register From",
  username: "sal3hkarimi",
};
