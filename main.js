// OBJETO LITERAL

const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso práctico de HTML y CSS",
        "Curso definitivo de HTML y CSS",
    ],

    // se crea el metodo "aprobarCurso()" donde se registraran los nuevos cursos aprobados
    aprobarCurso(nuevoCurso) {

        // "this." hace referencia al objeto donde se encuentra el metodo a crear, seguido del atributo a manejar
        this.cursosAprobados.push(nuevoCurso);
        
    } // se usaria entonces el metodo "aprobarCurso", en este caso en la consola para adicionar un nuevo curso: natalia.aprobarCurso("Curso de responsive design");

};

/*
// registrar un nuevo curso aprobado por natalia
natalia.cursosAprobados.push("Curso de responsive design");

// modificar el nombre
natalia.name = "Nata";

// sumarle un año a la edad
natalia.age += 1;
*/


// PROTOTIPOS

function Student (name, age, cursosAprobados) {

    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    /* opcion 1 para crear un metodo dentro de un prototipo
    this.aprobarCurso = function (nuevoCurso) {
    
    this.cursosAprobados.push(nuevoCurso);

    }
    */
}

// opcion 2 para crear un metodo para el prototipo pero se crea por fuera del prototipo
Student.prototype.aprobarCurso = function (nuevoCurso) {

    this.cursosAprobados.push(nuevoCurso);

}

// creacion de los objetos para el prototipo
const juanita = new Student (

    "Juanita Alejandra",
    15,
    [
        "Curso de introducción a la creación de videojuegos",
        "Curso de creación de personajes",
    ],

);


// CLASES

class Student2 { // se crea el metodo "constructor()" para las clases y los "this" hacen referencia al prototipo de la clase "Student2"
    constructor ({name, age, email, cursosAprobados = []}) { // los parametros entre "{}" para que sean objetos y asi sea mas facil registrarlos sin importar su orden de registro
                            // "cursosAprobados" sera un array vacio ya que inicialmente los usuarios no tendran ninguno
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCurso) { // se crea metodo para ingresar los nuevos cursos aprobados
        this.cursosAprobados.push(nuevoCurso);
    }
}

// creacion de los objetos para el prototipo de la clase "Student2"
const miguel = new Student2 ({ // se crean con "{}" por ser onjetos los parametros

    name: "Miguel",
    email: "ejemplo@platzi.com",
    age: 18,
});

// para agregar un nuevo curso aprobado para "miguel"
//miguel.aprobarCurso("Curso de tableau");