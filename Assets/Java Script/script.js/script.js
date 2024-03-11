class Cadastro {
  constructor(nome, sobrenome, email, telefone, genero) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.telefone = telefone;
    this.genero = genero;
  }
}

const alunosCadastrados = [];

function cadastrar(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const nomeAluno = formData.get('nome');
  const sobrenomeAluno = formData.get('sobrenome');
  const emailAluno = formData.get('email');
  const telefoneAluno = formData.get('telefone');
  const generoAluno = formData.get('genero');

  const novoAluno = new Cadastro(nomeAluno, sobrenomeAluno, emailAluno, telefoneAluno, generoAluno);
  alunosCadastrados.push(novoAluno);
  exibirAluno();
  limparFormulario(form);
}

function limparFormulario(form) {
  form.reset();
  document.querySelector('input[name="genero"]').checked = false;
}

function exibirAluno() {
  const listaAlunos = document.getElementById('lista-cadastrados');
  listaAlunos.innerHTML = '';

  alunosCadastrados.forEach((aluno, index) => {
    const itemLista = document.createElement('li');
    itemLista.textContent = `${index + 1}. Nome: ${aluno.nome}, Sobrenome: ${aluno.sobrenome}, Email: ${aluno.email}, Telefone: ${aluno.telefone} Gênero: ${aluno.genero}`;

    const editar = document.createElement('button');
    editar.className = 'botao-editar';
    editar.innerText = 'Editar';
    editar.addEventListener('click', () => {
      editarAluno(index);
    });

    const excluir = document.createElement('button');
    excluir.className = 'botao-excluir';
    excluir.innerText = 'Excluir';
    excluir.addEventListener('click', () => {
      excluirAluno(index);
    });

    itemLista.appendChild(editar);
    itemLista.appendChild(excluir);
    listaAlunos.appendChild(itemLista);
  });
}

function editarAluno(index) {
  const cadastro = alunosCadastrados[index];
  document.getElementById('primeiro_nome').value = cadastro.nome;
  document.getElementById('sobrenome').value = cadastro.sobrenome;
  document.getElementById('email').value = cadastro.email;
  document.getElementById('telefone').value = cadastro.telefone;
  document.querySelector(`input[name="genero"][value="${cadastro.genero}"]`).checked = true;

  exibirAluno();
}

function excluirAluno(index) {
  alunosCadastrados.splice(index, 1);
  exibirAluno();
}

const form = document.getElementById('form');
form.addEventListener('submit', cadastrar);

exibirAluno();