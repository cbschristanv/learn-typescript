
//** DECLARE AND CALL OBJECT TYPES **//
enum userRole {ADMIN, MODERATOR, USER}

const student: {
    name: string;
    age: number;
    gender?: string;
    interest: string[]; // declaring Array also if you want to declare number and string use any[] instead of string[]
    newAccess: userRole;
} = {
    name: "christian",
    age: 26,
    gender: "male",
    interest: ["Basketball", "Reading"],
    newAccess: userRole.ADMIN
}

if(student.newAccess === userRole.ADMIN) {
    console.log("is Admin")
} else if(student.newAccess === userRole.MODERATOR) {
    console.log("is Moderator")
} else {
    console.log("is User")
}