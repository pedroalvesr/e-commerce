# Fullstack-Developer

Avaliação Técnica para Recrutamento e Seleção - Fullstack

![gyphy-maximatech-ecommerce-dashboard](https://user-images.githubusercontent.com/22817118/63343364-26e08c80-c324-11e9-83d9-df50e53c79ca.gif)

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

crie um fork ou baixe manualmente o projeto clicando [aqui](https://github.com/pedroalvesr/Fullstack-Developer.git).

### Execultando o projeto

### front-end

Usando sua IDE de preferência abra a pasta `maximatech` que está dentro de `/frontend/maximatech`.

1. `Execute npm install` (esse comando baixará todas as dependências necessárias para que o projeto possa funcionar corretamente);
2. `Execute ng serve `(irá disponibilizar que o projeto possa ser acesso pelo navegador de preferência, geralmente o servidor é criado escutando na porta 4200);

se tudo der certo, deve aparecer algo parecido com isso:

![gyphy-maximatech-ecommerce-localhost](https://user-images.githubusercontent.com/22817118/63343661-e6cdd980-c324-11e9-876a-a4c19127e539.gif)


### back-end

 Eclipse Java EE IDE for Web Developers.

-  Version: Photon Release (4.8.0)

PgAdmin 4

- Version: 4.2

Usando sua IDE de preferência abra a pasta `Fullstack-Developer`.

1. converta o projeto para Maven-Project;
2. crie um banco de dados com o nome `maximatech`, **_(postgres 9.6 ou superior)_**;
3. configure o `aplication.properties`, conforme abaixo:

```
spring.datasource.url=jdbc:postgresql://localhost/maximatech
spring.datasource.username=postgres
spring.datasource.password=postgres
spring.jpa.hibernate.ddl-auto=update
spring.jpa.generate-ddl=true
```
Em `src/main/java ` abra o pacote `maximaecommerce` e execute conforme imagem abaixo:
 
![Captura de Tela 2019-08-19 às 15 33 38](https://user-images.githubusercontent.com/22817118/63290567-0b2fa480-c298-11e9-943e-613ec5428568.png)




