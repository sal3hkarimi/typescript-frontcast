/* ------- 1 ------ */
interface UserInfo {
    username: string;
    email: string;
    age: number;
}

/**
 * optional with way normal
 */
type OptionalUser = {
    [key in keyof UserInfo]?: UserInfo[key];
};
const aliInfo: OptionalUser = {
    username: "Ali",
};

/**
 * optional with generic way
 */
type OptionalUserWithGen<T> = {
    [key in keyof T]?: T[key];
};
const mmdInfo: OptionalUserWithGen<UserInfo> = {
    username: "Mohammad",
};

/**
 * readonly with generic way
 */
type readOnlyUserInfo<T> = {
    readonly [key in keyof T]: T[key];
};
const amirInfo: readOnlyUserInfo<UserInfo> = {
    username: "Amin123",
    email: "amir@gmail.com",
    age: 12,
};
// amirInfo.age = 23 // -> Error: Cannot assign to 'age' because it is a read-only property.

/* ------- 2 ------ */
type NullableUser = {
    [key in keyof UserInfo]: User[key] | null;
};
