// clase creada para revisar el polimorfismo
class Comment {
    constructor ({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0; // atributo adicional
    }

    publicar() { // metodo que muestra como sera la publicacion de los comentarios
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}


function videoPlay (id) {
    const urlSecreta = "https://urlvideosecreto.com " + id;
    console.log("Se esta reporduciendo el video " + urlSecreta);
}

function videoPause (id) {
    const urlSecreta = "https://urlvideosecreto.com " + id;
    console.log("Video pausado " + urlSecreta);
}

// se registra "export" a la clase "PlatziClass" el cual va a referenciarla como la unica que podra ser utilizada desde el "index"
/*export*/class PlatziClass {
    constructor ({name, videoID}) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoPause(this.videoID);
    }

}

class Course {
    constructor ({name, classes = [], isFree = false, lang = "spanish"}) {
        this._name = name; // "_name" guion al piso para registrar que la propiedad sea mas privada al momento de realizarle alguna modificacion
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    // sintaxis para utilizar "get & set" para usar las propiedades que se requieran ser mas privadas
    get name() {
        return this._name;
    }

    set name (nuevoNom) { // condiciones dadas para revisar la modificacion a la propiedad privada
        if (nuevoNom === "Nombre inapropiado para el curso") {
            console.error("Error");
        } else {
            this._name = nuevoNom;
        }
    }
}

const cursoProgBasica = new Course({
    name: "Curso gratuito de programacion basica",
    isFree: true,
});

const cursoDefinitivoHTML = new Course({
    name: "Curso definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Course({
    name: "Curso practico de HTML y CSS",
    lang: "english",
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

    publicarComentario (commentContent) {
        const comment = new Comment ({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

// cada clase de las tres siguientes, heredara (extends) las propiedades de la clase Student
class FreeStudent extends Student {
    constructor(propiedades) { // se le nombra "propiedades" a lo que se recibira en los objetos "juan" y "miguelito"
        super(propiedades); // se llama al metodo "super()" el cual hace referencia a la clase de donde se esta heredando
    }                       // para enviarle las "propiedades" recibidas de los objetos "juan" y "miguelito"

    approveCourse(newCourse) { // metodo para validar si el curso a tomar por el usuario con suscripcion gratuita, es efectivamente gratuito
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, "+this.name+", solo puedes tomar cursos gratuitos");
        }
    }

}

class BasicStudent extends Student {
    constructor(propiedades) {
        super(propiedades);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== "english") { // se valida si el lenguaje del curos (.lang) es en ingles
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, "+this.name+", solo puedes tomar cursos en español");
        }
    }
}

class ExpertStudent extends Student {
    constructor(propiedades) {
        super(propiedades);
    }
    
    approveCourse(newCourse) { // para las suscripciones "ExpertStudent" tienen acceso a todos los cursos
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor(propiedades) {
        super(propiedades);
    }
    
    approveCourse(newCourse) { // para las suscripciones "ExpertStudent" tienen acceso a todos los cursos
        this.approvedCourses.push(newCourse);
    }

    publicarComentario (commentContent) {
        const comment = new Comment ({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }
}

const juan = new FreeStudent ({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juan.com",
    instagram: "juanitodc",
    learningPaths: [
        escuelaData,
        escuelaVgs
    ]
});

const miguelito = new BasicStudent ({
    name: "Miguel",
    username: "miguelfeliz",
    email: "migue@miguel.com",
    facebook: "miguelacho",
    learningPaths: [
        escuelaWeb,
        escuelaVgs
    ]
});

const freddy = new TeacherStudent ({
    name: "Freddy",
    username: "freddier",
    email: "freddier@freddy.com",
    facebook: "freddier",
});