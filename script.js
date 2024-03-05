

class Formulario{
    constructor(nome,nascimento,cpf,email,telefone,){
        this.nome = nome;
        this.nascimento = nascimento;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;

    }
}
const novoForm = new Formulario("marta",588554852110,29052005,"rahray@gmail.com",7369539849)

console.log(novoForm)