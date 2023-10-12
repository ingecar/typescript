import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";

let cursos = [ new Curso('Angular', 40, 4.0, true, 2021),
               new Curso('JavaScript', 40, 4.2, true, 2022),
               new Curso('TypeScript', 40, 4.5, false, 2020),
               new Curso('HTML', 40, 4.9, true, 2022)
             ];

export const ap = new Aprendiz('Andres', 'Herrera', 'avatar.png', 29, NivelEducativo.POSGRADO, cursos);


let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let cursosTable: HTMLElement = document.getElementById("estadisticas")!;



console.log(mostrarCursosAprendiz(ap));

mostrarAprendiz(ap);
mostrarCursosAprendiz(ap);

function mostrarAprendiz(aprendiz: Aprendiz): void {
    let tbodyAprendiz = document.createElement('tbody');
    tbodyAprendiz.innerHTML = `  <tr><td colspan=2><img src="./${aprendiz.avatar}" height="100"></td></tr>
                                 <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
                                 <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
                                 <tr><td>Nivel Educativo:</td><td>${aprendiz.nivelEducativo}</td></tr>        
                                 <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>`;
                                 aprendizTable.appendChild(tbodyAprendiz);
                                 
    
}

function mostrarCursosAprendiz(aprendiz: Aprendiz): void {
    let darCursosCertificados: number = aprendiz.darCursosCertificados();
    let trElement: HTMLElement =  document.createElement('tr');
    trElement.innerHTML = `<td><b>Cursos Certificados</b></td>
                           <td>${darCursosCertificados}</td>`;
                           cursosTable.appendChild(trElement);
}