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