function SetCourse(
    target: object,
    methodName: string,
    decorator: PropertyDescriptor
) {
    console.log("target |>", target);
    console.log("methodName |>", methodName);
    console.log("describe |>", decorator);

    const setCourseMain = decorator.value;
    decorator.value = function (course: string) {
        setCourseMain.call(this, {
            id: crypto.randomUUID(),
            name: course,
        });
    };
}

class StudentCourse {
    private courses: string[] = [];

    constructor(
        public firstName: string,
        public lastName: string,
        public email: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    @SetCourse
    setCourse(course: string) {
        this.courses.push(course);
    }
    getCourses() {
        console.log(this.courses);
    }
}

const aliCourse = new StudentCourse("Ali", "Ahmadi", "aliahmadi@gmail.com");
aliCourse.setCourse("JS");
aliCourse.getCourses();
