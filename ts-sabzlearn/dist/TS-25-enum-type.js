"use strict";
/**
 * TS-25-enum-type
 */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const userDashboard = {
    id: 1,
    name: "sal3h",
    age: 26,
    role: Role.ADMIN,
};
/**
 * define enum type
 * ---------------- */
var ActionsTask;
(function (ActionsTask) {
    ActionsTask[ActionsTask["GET"] = 0] = "GET";
    ActionsTask[ActionsTask["POST"] = 1] = "POST";
    ActionsTask["ADD"] = "add";
    ActionsTask["REMOVE"] = "remove";
    ActionsTask["UPDATE"] = "update";
})(ActionsTask || (ActionsTask = {}));
