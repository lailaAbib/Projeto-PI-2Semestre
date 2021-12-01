alem do comando npm install, para instalar as dependencias do projeto,

executar também os comandos

npx sequelize db:create   => para criar o banco de dados no mysql

npx sequelize-cli db:migrate => para criar as tabelas desse banco

e

npx sequelize db:seed:all => para criar um registro na tabela empresa
esse comando irá incluir na tabela empresa os dados de uma empresa ficticia.
A ideia é essa tabela ser populada pela empresa detentora do software, após a assinatura de 
um contrato. Ao contrario da pessoa fisica, que ela mesma faz o cadastro no site.
