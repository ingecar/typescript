import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";

let cursos = [ new Curso('Angular', 40, 4.0, true, 2021),
               new Curso('JavaScript', 40, 4.2, true, 2022),
               new Curso('TypeScript', 40, 4.5, false, 2020),
               new Curso('HTML', 40, 4.9, true, 2022)
             ];

export const ap = new Aprendiz('Andres', 'Herrera', 'avatar.png', 29, NivelEducativo.POSGRADO, cursos);


let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;
let cursosTable: HTMLElement = document.getElementById("cursos")!;


mostrarAprendiz(ap);
mostrarEstadisticas(ap);
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

function mostrarEstadisticas(aprendiz: Aprendiz): void {
    let darCursosCertificados: number = aprendiz.darCursosCertificados();
    let trElement: HTMLElement =  document.createElement('tr');
    trElement.innerHTML = `<td><b>Cursos Certificados</b></td>
                           <td>${darCursosCertificados}</td>`;
                           estadisticasTable.appendChild(trElement);
}

function mostrarCursosAprendiz(aprendiz: Aprendiz): void {
    let cursosTbody: HTMLElement = document.createElement('tbody');
    for (let curso of aprendiz.cursos) {
        let trElement: HTMLElement = document.createElement('tr');
        trElement.innerHTML = `<td>${curso.nombre}</td>
                               <td>${curso.horas}</td>
                               <td>${curso.calificacion}</td>
                               <td>${curso.certificado}</td>
                               <td>${curso.anio}</td>`;
                               cursosTable.appendChild(trElement);
    }
}
