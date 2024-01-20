//** DECLARE AND CALL OBJECT TYPES **//
var userRole;
(function (userRole) {
    userRole[userRole["ADMIN"] = 0] = "ADMIN";
    userRole[userRole["MODERATOR"] = 1] = "MODERATOR";
    userRole[userRole["USER"] = 2] = "USER";
})(userRole || (userRole = {}));
var student = {
    name: "christian",
    age: 26,
    gender: "male",
    interest: ["Basketball", "Reading"],
    newAccess: userRole.ADMIN
};
if (student.newAccess === userRole.ADMIN) {
    console.log("is Admin");
}
else if (student.newAccess === userRole.MODERATOR) {
    console.log("is Moderator");
}
else {
    console.log("is User");
}
