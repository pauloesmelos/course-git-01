/*PARTE 1*/

//1)se o git ainda não estiver configurado,faça isso:
//git config --global user.name "seu nome"
//git config --global user.email "email@gmail.com"

/*2)INICIANDO UM REPOSITORIO*/
//git init

/*3)LISTANDO ALTERAÇÕES E ADICIONANDO ARQUIVOS PARA UM COMMIT*/
//git status
//git add .
//git commit -m "mensagem"

/*4)ADICIONAR UM REPOSITÓRIO GITHUB E FAZER PUSH PRO MESMO*/
//git remote add origin url
//git push -u origin master

alert('finish');
console.log('change');

/*PARTE 2 - Branching*/

//Branc(ramificações) é uma forma de utilizar e modificar todo o master sem interferir diretamente nele
//toda vez que formos adicionar uma nova funcionalidade, devemos iniciar uma nova branch ao invés de alterar a master!
//o que é alterado no branch não afetará o master.

//1)Criando uma branch
//git branch nomeBranch

//2)Navegar/Alterar a branch atual
//git checkout nomeBranch

//2.1)Atalho que cria e altera a branch de uma vez só
//git checkout -b nomeBranch

//3)Listando todas branch
//git branch

//Exercício 1 - criar uma nova branch e adicionar o arquivo style.css via linha de comando
//depois alterar novamente para a master

//reposta/anotação: 
//1-criar uma branch e acessá-la com git checkout -b nomeBranch
//2-via terminal criar o arquivo com o seguinte comando: touch index.html
//3-adicionar o arquivo a branch e comitar: git add . & git commit -m "texto"
//4-alterar pra branch master: git checkout master
//ATENÇÃO - ao voltar pra master as mudanças são desfeitas, sendo acessadas apenas na nova branch auxiliar