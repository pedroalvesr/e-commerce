# e-commerce
Se você está pesquisando sobre como montar um negócio para vender produtos na Internet, você está prestes a se juntar a um grupo de milhares de empreendedores que escolheram um nicho de mercado e foram se aventurar no mercado de E-commerce.

![gyphy-online-ecommerce-dashboard](https://user-images.githubusercontent.com/22817118/64640325-1af66080-d3e0-11e9-88c7-e7bf15239ba5.gif)

### Configuração da Aplicação

### front-end

```
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 8.1.3
Node: 10.15.3
OS: darwin x64
Angular: 8.1.3
... animations, cli, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.801.3
@angular-devkit/build-angular     0.801.3
@angular-devkit/build-optimizer   0.801.3
@angular-devkit/build-webpack     0.801.3
@angular-devkit/core              8.1.3
@angular-devkit/schematics        8.1.3
@ngtools/webpack                  8.1.3
@schematics/angular               8.1.3
@schematics/update                0.801.3
rxjs                              6.4.0
typescript                        3.4.5
webpack                           4.35.2
```
### back-end

A PoC de um e-commerce foi desenvolvida na **IDE Eclipse** e utilizando o **maven** para a configuração das dependências, abaixo o arquivo **pom.xml** que deve conter as dependências 

- `spring-boot-starter-data-rest` que é a biblioteca para a criação do servidor REST com o Spring Boot;

- `spring-boot-starter-data-jpa `que é a dependência do Spring Data;

-  `postgresql` que é o Driver para a conexão com o banco de dados;

- `springfox-swagger2`, `springfox-swagger-ui` que é uma biblioteca que visa solucionar esse problema de documentação e outros .

```
      <dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.postgresql</groupId>
			<artifactId>postgresql</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>

		<dependency>
			<groupId>io.springfox</groupId>
			<artifactId>springfox-swagger2</artifactId>
			<version>2.9.2</version>
		</dependency>
		<dependency>
			<groupId>io.springfox</groupId>
			<artifactId>springfox-swagger-ui</artifactId>
			<version>2.9.2</version>
		`</dependency>`
	</dependencies>
```

### Como usar

crie um fork ou baixe manualmente o projeto clicando [aqui](https://github.com/pedroalvesr/e-commerce.git).

### Execultando o projeto

### front-end

Usando sua IDE de preferência abra a pasta `maximatech` que está dentro de `/frontend/ecommerce`.

1. `Execute npm install` (esse comando baixará todas as dependências necessárias para que o projeto possa funcionar corretamente);
2. `Execute ng serve `(irá disponibilizar que o projeto possa ser acesso pelo navegador de preferência, geralmente o servidor é criado escutando na porta 4200);

se tudo der certo, deve aparecer algo parecido com isso:

![gyphy-online-ecommerce-localhost](https://user-images.githubusercontent.com/22817118/64641616-e89a3280-d3e2-11e9-9631-89e29b8a9c5a.gif)


### back-end

 Eclipse Java EE IDE for Web Developers.

-  Version: Photon Release (4.8.0)

PgAdmin 4

- Version: 4.2

Usando sua IDE de preferência abra a pasta `e-commerce`.

1. converta o projeto para Maven-Project;
2. crie um banco de dados com o nome `ecommerce`, **_(postgres 9.6 ou superior)_**;
3. configure o `aplication.properties`, conforme abaixo:

```
spring.datasource.url=jdbc:postgresql://localhost/ecommerce
spring.datasource.username=postgres
spring.datasource.password=postgres
spring.jpa.hibernate.ddl-auto=update
spring.jpa.generate-ddl=true
```
Em `src/main/java ` abra o pacote `ecommerce` e execute conforme imagem abaixo:
 
![Captura de Tela 2019-09-10 às 16 07 11](https://user-images.githubusercontent.com/22817118/64642609-21d3a200-d3e5-11e9-9b08-b1b755808ea8.png)
