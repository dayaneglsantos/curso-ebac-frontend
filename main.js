function Dispositivo(nome) {
  this.nome = nome;
  this.ligado = false;
  this.ligar = function () {
    if (this.ligado) {
      console.log(`${this.nome} já ligado`);
    } else {
      console.log(`${this.nome} foi ligado`);
    }
    this.ligado = true;
  };
  this.desligar = function () {
    if (!this.ligado) {
      console.log(`${this.nome} já desligado`);
    } else {
      console.log(`${this.nome} foi desligado`);
    }
    this.ligado = false;
  };
}

function Smartphone(nome, modelo, marca) {
  Dispositivo.call(this, nome);
  this.modelo = modelo;
  this.marca = marca;
}
function Tablet(nome, modelo, marca, valor) {
  Smartphone.call(this, nome, modelo, marca);
  this.valor = valor;
}

const dispositivo = new Dispositivo("TV");
const smartphone = new Smartphone("Celular", "Galaxy S10", "Samsung");
const tablet1 = new Tablet("Tablet", "Ipad", "Apple", 1200);

console.log(tablet1);
tablet1.desligar();
