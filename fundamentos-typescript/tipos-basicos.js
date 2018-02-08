//boolean
var estaPago = true;
//number
var idade = 20;
var valor = 29.99;
//string
var empresa = 'AlgaWorks';
var nome = 'João';
//log com template
console.log("Ol\u00E1, meu nome \u00E9 " + nome + " e tenho " + idade + " anos");
//arrays
var notas = [8, 6, 7, 9];
//tuple
var alunos = ['João', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);
//enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
//any
var algumValor = 4;
algumValor = 'Agora é uma string';
algumValor = true;
//void
function alerta() {
    //.. alert('Operação não permitida');
}
//null e undefined -> Não faz muito sentido, são subtipos de outros tipos
var u;
var n;
