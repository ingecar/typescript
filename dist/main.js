import { Aprendiz, NivelEducativo } from "./aprendiz.js";
export var ap = new Aprendiz('Andres', 'Herrera', 'avatar.png', 29, NivelEducativo.POSGRADO);
var aprendizTable = document.getElementById("aprendiz");
mostrarAprendiz(ap);
function mostrarAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement('tbody');
    tbodyAprendiz.innerHTML = "  <tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "\" height=\"100\"></td></tr>\n                                 <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n                                 <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n                                 <tr><td>Nivel Educativo:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>        \n                                 <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
