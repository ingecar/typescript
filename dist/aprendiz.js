export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "Bachillerato";
    NivelEducativo["UNIVERSIDAD"] = "Universidad";
    NivelEducativo["POSGRADO"] = "Posgrado";
})(NivelEducativo || (NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombres, apellidos, avatar, edad, nivelEducativo, cursos) {
        if (cursos === void 0) { cursos = []; }
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
        this.cursos = cursos;
    }
    Aprendiz.prototype.darCursosCertificados = function () {
        var totalCursosCertificados = 0;
        for (var i = 0; i < this.cursos.length; i++) {
            var curso = this.cursos[i];
            if (curso.certificado) {
                totalCursosCertificados++;
            }
        }
        return totalCursosCertificados;
    };
    return Aprendiz;
}());
export { Aprendiz };
