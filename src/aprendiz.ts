import { Curso } from "./curso";
export enum NivelEducativo {
    BACHILLERATO = 'Bachillerato',
    UNIVERSIDAD = 'Universidad',
    POSGRADO = 'Posgrado'
}

export class Aprendiz {
    
    constructor(public nombres: string, public apellidos: string, public avatar: string, public edad: number, public nivelEducativo: NivelEducativo, public cursos: Curso[] = []) 
    { 

    }
    public darCursosCertificados(): number {
        let totalCursosCertificados: number = 0;
        for (let i = 0; i < this.cursos.length; i++) {
            let curso = this.cursos[i];
            if (curso.certificado) {
                totalCursosCertificados++;
            }
        }
        return totalCursosCertificados;
    }
}

