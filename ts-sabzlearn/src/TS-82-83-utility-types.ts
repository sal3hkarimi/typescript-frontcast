type UserData = {
    username: string;
    email: string;
    age: number;
};

type PasswordUser = string | undefined | null;
type AllType = string | number | undefined | null | object | [];

type RequiredUser = Required<UserData>;
type ReadonlyUser = Readonly<UserData>;
type PartialUser = Partial<UserData>; // optional property of objects !== Required
type PickUser = Pick<UserData, "username">; // -> {username: string}
type NonNullablePassword = NonNullable<PasswordUser>; // for work this type you must active ("strictNullChecks": true) in tsconfig.js
type RemoveOfUnionType = Exclude<AllType, string | number | [] | undefined>; // result: object | null
type OmitType = Omit<UserData, "age">; // |> type OmitType = { username: string; email: string; }

// Record Type
type Names = "Sal3h" | "Ali";

type RecordType = Record<Names, string>; //  { Sal3h: string; Ali: string };
const allUser: RecordType = {
    Sal3h: "abc",
    Ali: "abc",
};
// another example of Record Type
type Course = "Computer Science" | "Mathematics" | "Literature";
interface CourseInfo {
    professor: string;
    cfu: number;
}
const courses: Record<Course, CourseInfo> = {
    "Computer Science": {
        professor: "Mary Jane",
        cfu: 12,
    },
    Mathematics: {
        professor: "John Doe",
        cfu: 12,
    },
    Literature: {
        professor: "Frank Purple",
        cfu: 12,
    },
};
