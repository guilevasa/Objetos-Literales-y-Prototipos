class Student {
    constructor ({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    })
    {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    } // para las propiedades usadas con "this", finalizar con ";"
}

const juan2 = new Student ({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juan.com",
    instagram: "juanitodc",
});

const miguelito2 = new Student ({
    name: "Miguel",
    username: "miguelfeliz",
    email: "migue@miguel.com",
    facebook: "miguelacho",
});