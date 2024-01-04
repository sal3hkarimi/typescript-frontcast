"use strict";
/**
 * TS-31-null-undefined-never
 */
const adminLoginHandler = (admin) => {
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
            let neverVariable = admin;
            return neverVariable;
        }
    }
};
function errorMaker(msg, code) {
    throw new Error(JSON.stringify({ message: msg, status: code }));
}
errorMaker("Not Found :(", 404);
