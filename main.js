const form = document.getElementById("form-digitacao");

form.addEventListener('submit',function(e) {
    e.preventDefault();
    const numB = document.getElementById('numero-B').value;
    const numA = document.getElementById('numero-A').value;
    let mensagem = `O 2º número (${numB}) deve ser maior que o 1º (${numA})!`;
    if (Number(numB) > Number(numA)) {
        mensagem = `Parabéns, o 2º número (${numB}) é maior que o 1º (${numA})!`;
        document.querySelector('.mensagemUsuario').style.background = "green";
    } else {
        document.querySelector('.mensagemUsuario').style.background = "red";
    }
    document.querySelector('.mensagemUsuario').innerHTML = mensagem;
    document.querySelector('.mensagemUsuario').style.display = 'block';
});

form.addEventListener('input',function(f) {
    f.preventDefault();
    document.querySelector('.mensagemUsuario').style.display = 'none';
});