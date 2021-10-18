# API Simples feita apenas para o estudo do sequelize 


## TECNOLOGIAS
- Nodejs
- Sequelize
- Express

## ENDPOINTS 
<hr>
- POST - /user/create -> Criar usuário 
=> parametros (passar no body) = "name" -> nome do usuário / "email" -> email do usuário / "age" -> idade do usuário 
<hr>
- PATCH - /user/:userID/update -> Editar informação do usuário 
=> parametros (passar no body) = "email", "name", "age" passar apenas os parametros que deseja alterar
<hr>
- DELTE - /user/:userID/delete -> Exclui um usuário
=> parametros (passar no body) = "userID" -> id do usuário que deseja deletar 
<hr>
- GET - /user/:userID/garage -> Retorna carros do usuário 
<hr>
- POST - /user/:userID/garage -> Adiciona carro 
=> parametros (passar no body) = "brand" -> marca do carro  / "car" -> nome do carro 
<hr>
- GET - /garage/all -> Retorna todos os carros registrados 
<hr>
- GET - /garage/:garageID -> Retorna carro por ID com o nome do dono
<hr>
- DELETE - /garage/delte ->  Deleta um carro do usuario 
=> parametros (passar no body) = "userID" -> id do dono / "car" -> nome do carro 
<hr>

