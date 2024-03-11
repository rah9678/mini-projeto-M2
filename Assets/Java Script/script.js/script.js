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
    const nomeAluno = document.getElementById('primeiro_nome').value;
    const sobrenomeAluno = document.getElementById('sobrenome').value;
    const emailAluno = document.getElementById('email').value;
    const telefoneAluno = document.getElementById('telefone').value;
    const generoAluno = document.querySelector('input[name="genero"]:checked');
  
    const novoAluno = new Cadastro(nomeAluno, sobrenomeAluno, emailAluno, telefoneAluno, generoAluno ? generoAluno.value : '');
    alunosCadastrados.push(novoAluno);
    exibirAluno();
    limparFormulario();

  }
    function limparFormulario() {
        document.getElementById('primeiro_nome').value = '';
        document.getElementById('sobrenome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefone').value = '';
        document.querySelector('input[name="genero"]:checked').checked = false;
    
    
    
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
        editarAluno( index);

      });
  
      const excluir = document.createElement('button');
      editar.className = 'botao-excluir';
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
    document.querySelector('input[name="genero"][value="' + cadastro.genero + '"]').checked = true;


    exibirAluno();
}
  
  


  function excluirAluno(index) {
    alunosCadastrados.splice(index, 1);
    exibirAluno();
  }
  
  const form = document.getElementById('form');
  form.addEventListener('submit', cadastrar);
  
  exibirAluno();