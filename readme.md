#Rota de autenticação com token JWT.

##Projeto
Projeto de autenticação e persistência de token salvo na aplicação, utilizei o mongoDB como banco de dados, e o token JWT para a autenticação.
O Projeto e simples, fiz para praticar e fixar o conteúdo do curso personalizando a minha maneira, a ideia atual e fazer um sistema de login, onde o usuário irá se cadastrar e efetuar o login, podendo ser aprimorada pensando em conceitos de boas práticas e até mesmo implementar novas funcionalidades.

##Json Web Token, e um token utilizado para realizar verificações de segurança, e facilitar o acesso e o cadastro em alguns sites.
O token fica salvo na memória do navegador e pode ser usado para uma infinidade de coisa.

##MongoDB, Banco de dados não relacional, banco escolhido para o projeto por ser um banco bem fácil e prático de se mexer.

##Express.js como servidor.

##Bycrpt, utilizei esse pacote para adicionar mais segurança na aplicação, codificando a senha dos usuários, assim em caso de uma invasão ao banco de dados, as informações dos clientes estariam seguras

##Novas Funcionalidades do Projeto

### Tarefas

Agora o projeto se tornou uma aplicação(CRUD) de gerenciamento de tarefas, onde o usuário logado poderá ter suas tarefas salvas.

###Rotas
Foi implementado rotas de criar, editar, buscar e deletar tarefas foram criadas, no momento a aplicação está em processo de desenvolvimento e qualquer bug pode ser reportado por issues.
