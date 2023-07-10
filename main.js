const alunos = [
  {
    nome: "Dayane",
    nota: 8,
  },
  {
    nome: "Thais",
    nota: 5,
  },
  {
    nome: "Flávia",
    nota: 7,
  },
  {
    nome: "Rebeca",
    nota: 9,
  },
];

const aprovados = alunos.filter((obj) => {
  return obj.nota >= 6;
});
console.log(aprovados);
