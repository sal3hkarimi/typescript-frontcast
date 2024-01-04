/**
 * TS-24-casting-in-dom
 */

const linkEl = document.getElementById("link") as HTMLAnchorElement;

const usernameEl = document.getElementById("username") as HTMLInputElement;

const passwordEl = <HTMLInputElement>document.getElementById("password");

const submitBtnEl = document.getElementById("submit");
const innerSubmitBtnEl = (submitBtnEl as HTMLButtonElement ).innerHTML;
