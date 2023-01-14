const alunos = [
    {
        nome: 'Fernando',
        nota: 4,
    },
    {
        nome: 'Maria',
        nota: 9,
    },
    {
        nome: 'Gerson',
        nota: 8,
    },
    {
        nome: 'Felipe',
        nota: 7,
    },
    {
        nome: 'Paulo',
        nota: 6,
    },
    {
        nome: 'Luis',
        nota: 5,
    }
];

function ajustaEspaco(texto) {
    let quant = 10 - texto.length;
    for (let i = 0; i < quant; i++) {
        texto += ' ';
    }
    return texto;
}

let lista;

for (let i = 0; i < alunos.length; i++) {

    if (i == 0) {
        lista = 'Aluno      Nota\n--------   ----\n';
    }
    lista = lista + `${ajustaEspaco(alunos[i].nome)}   ${alunos[i].nota}\n`;

}

console.log(lista)

const aprovado = aluno => aluno.nota >= 6;

const alunosAprovados = alunos.filter(aprovado);

let mensagem = "Os alunos aprovados foram:"

for (let i = 0; i < alunosAprovados.length; i++) {

    mensagem = mensagem + ` ${alunosAprovados[i].nome}`;
    if (i == alunosAprovados.length - 1) {
        mensagem = mensagem + ".";
    } else if (i == alunosAprovados.length - 2) {
        mensagem = mensagem + " e";
    } else {
        mensagem = mensagem + ",";
    }

}

console.log(mensagem)
