function Estoque(codigo) {
    this.codigo = codigo;
}

function Veiculos(codigo, modelo, cor, preco) {

    Estoque.call(this,codigo);
    this.modelo = modelo;
    this.cor = cor;

    let _preco = preco;
    this.getPreco = function() {
        return _preco;
    }

    this.setPreco = function(valor) {
        if (typeof valor === 'number') {
            _preco = valor;
        }
    }

    this.desconto = function() {
        const novoPreco = _preco * 0.95;
        _preco = novoPreco;
    }

    this.apresentaVeiculo = function() {
        console.log(`Este é um ${this.modelo}, cor ${this.cor}, e seu preço é ${_preco}.`);
    }

}

function Utilitarios(codigo, cor, preco) {
    Veiculos.call(this,codigo,"L-200",cor,preco);

    this.desconto = function() {
        const novoPreco = this.getPreco() * 0.9;
        this.setPreco(novoPreco);
    }
}

function Pecas(codigo, descricao, quantidade) {
    Estoque.call(this,codigo);
    this.descricao = descricao;

    let _quantidade = quantidade;
    this.getQuantidade = function() {
        return _quantidade;
    }

    this.setQuantidade = function(unidades) {
        if (typeof unidades === 'number') {
            _quantidade = unidades;
        }
    }

    this.baixaEstoque = function(unidades) {
        if (typeof unidades === 'number') {
            _quantidade -= unidades;
            console.log(`O estoque de ${this.descricao} baixou para ${_quantidade}`)
        }
    }

}

const veiculo1 = new Veiculos(123456,'HB20','Azul',85000);
const veiculo2 = new Utilitarios(123456,'Verde',87000);
veiculo1.apresentaVeiculo();
veiculo2.apresentaVeiculo();

veiculo1.setPreco(90000);
veiculo1.apresentaVeiculo();
veiculo1.desconto();
veiculo1.apresentaVeiculo();

veiculo2.desconto();
veiculo2.apresentaVeiculo();

peca1 = new Pecas(1234596,"Virabrequim",12);
peca2 = new Pecas(1245493,"Pistão",8);

console.log(peca1.getQuantidade());
peca1.baixaEstoque(2);
console.log(peca1.getQuantidade());