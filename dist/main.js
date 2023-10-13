import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [new Curso('Angular', 40, 4.0, true, 2021),
    new Curso('JavaScript', 40, 4.2, true, 2022),
    new Curso('TypeScript', 40, 4.5, false, 2020),
    new Curso('HTML', 40, 4.9, true, 2022)
];
export var ap = new Aprendiz('Andres', 'Herrera', 'avatar.png', 29, NivelEducativo.POSGRADO, cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
var cursosTable = document.getElementById("cursos");
mostrarAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap);
function mostrarAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement('tbody');
    tbodyAprendiz.innerHTML = "  <tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "\" height=\"100\"></td></tr>\n                                 <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n                                 <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n                                 <tr><td>Nivel Educativo:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>        \n                                 <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var darCursosCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement('tr');
    trElement.innerHTML = "<td><b>Cursos Certificados</b></td>\n                           <td>".concat(darCursosCertificados, "</td>");
    estadisticasTable.appendChild(trElement);
}
function mostrarCursosAprendiz(aprendiz) {
    var cursosTbody = document.createElement('tbody');
    for (var _i = 0, _a = aprendiz.cursos; _i < _a.length; _i++) {
        var curso = _a[_i];
        var trElement = document.createElement('tr');
        trElement.innerHTML = "<td>".concat(curso.nombre, "</td>\n                               <td>").concat(curso.horas, "</td>\n                               <td>").concat(curso.calificacion, "</td>\n                               <td>").concat(curso.certificado, "</td>\n                               <td>").concat(curso.anio, "</td>");
        cursosTable.appendChild(trElement);
    }
}
