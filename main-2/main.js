class Course {
    constructor ({name, classes = []}) {
        this.name = name;
        this.classes = classes;
    }
}

const cursoProgBasica = new Course({
    name: "Curso gratuito de programacion basica",
});

const cursoDefinitivoHTML = new Course({
    name: "Curso definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Course({
    name: "Curso practico de HTML y CSS",
});

const cursoDataBus = new Course({
    name: "Curso de data business",
});

const cursoDataViz = new Course({
    name: "Curso de data Viz",
});

const cursoUnity = new Course({
    name: "Curso de unity",
});

const cursoUnreal = new Course({
    name: "Curso de unreal",
});


class LearningPath {
    constructor ({name, courses = []}) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de desarrollo web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ]
});
const escuelaData = new LearningPath({
    name: "Escuela de data science",
    courses: [
        cursoProgBasica,
        cursoDataBus,
        cursoDataViz,
    ]
});
const escuelaVgs = new LearningPath({
    name: "Escuela de video games",
    courses: [
        cursoProgBasica,
        cursoUnity,
        cursoUnreal,
    ]
});

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
    learningPaths: [
        escuelaData,
        escuelaVgs
    ]
});

const miguelito2 = new Student ({
    name: "Miguel",
    username: "miguelfeliz",
    email: "migue@miguel.com",
    facebook: "miguelacho",
    learningPaths: [
        escuelaWeb,
        escuelaVgs
    ]
});