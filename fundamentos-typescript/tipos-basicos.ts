//boolean
let estaPago: boolean = true;

//number
let idade: number = 20;
let valor: number = 29.99;

//string
let empresa: string = 'AlgaWorks';
let nome: string = 'João';

//log com template
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`);

//arrays
let notas: number[] = [8,6,7,9];

//tuple
let alunos: [string, number, string] = ['João', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);

//enum
enum Cor {Verde, Amarelo, Azul, Branco};
let corFundo: Cor = Cor.Verde;

//any
let algumValor: any = 4;
algumValor = 'Agora é uma string';
algumValor = true;

//void
function alerta(): void {
    //.. alert('Operação não permitida');
}

//null e undefined -> Não faz muito sentido, são subtipos de outros tipos
let u: undefined;
let n: null;