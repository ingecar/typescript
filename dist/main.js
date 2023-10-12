import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [new Curso('Angular', 40, 4.0, true, 2021),
    new Curso('JavaScript', 40, 4.2, true, 2022),
    new Curso('TypeScript', 40, 4.5, false, 2020),
    new Curso('HTML', 40, 4.9, true, 2022)
];
export var ap = new Aprendiz('Andres', 'Herrera', 'avatar.png', 29, NivelEducativo.POSGRADO, cursos);
var aprendizTable = document.getElementById("aprendiz");
var cursosTable = document.getElementById("estadisticas");
console.log(mostrarCursosAprendiz(ap));
mostrarAprendiz(ap);
mostrarCursosAprendiz(ap);
function mostrarAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement('tbody');
    tbodyAprendiz.innerHTML = "  <tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "\" height=\"100\"></td></tr>\n                                 <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n                                 <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n                                 <tr><td>Nivel Educativo:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>        \n                                 <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarCursosAprendiz(aprendiz) {
    var darCursosCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement('tr');
    trElement.innerHTML = "<td><b>Cursos Certificados</b></td>\n                           <td>".concat(darCursosCertificados, "</td>");
    cursosTable.appendChild(trElement);
}
