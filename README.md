Desafio Gerenciador de Produtos Zazuu

## Zazuu

Desafio técnico para a vaga de desenvolvedor Full-Stack.

# Tecnologias usadas no frontend.

- React 18
- Next 13.5.4
- React-Hook-Fom 7.47.0
- React-Redux 8.1.3
- Chacra-Ui 2.8.1
- Axios 1.5.1
- Typescript 5.2.2

# Tecnologias usadas no backend.

- Express 4.18.2
- Typescript 5.2.2
- Prisma 5.4.1
- Bcrypt 5.1.1
- Json Web Token 9.0.2

## Serviços usados

- Github

## Requisitos

- Docker
- Docker Compose

## Como Rodar o Projeto

### Passo 1: Clonar o Repositório

Para clonar o repositório, execute o seguinte comando no terminal:

```
bash git clone <https://github.com/carlosrrds/gerenciadorZazuu.git>
```

### Passo 2: Acessar a Pasta do Projeto

Após clonar o repositório, navegue até a pasta gerenciadorZazuu:

```
cd gerenciadorZazuu
```

### Passo 3: Executar o Docker Compose

Agora, para subir todos os serviços da aplicação, execute o seguinte comando:

```
docker-compose up
```

Isso irá iniciar todos os containers e serviços necessários para o funcionamento da aplicação.

Parabéns, agora a aplicação deve estar rodando na sua máquina local! Acesse via navegador ou utilize a API conforme documentação.

### Principais Funcionalidades da Aplicação

🔐 Criação e Login de Usuários com JWT
Utilizamos JSON Web Tokens (JWT) para autenticar usuários. Isso permite um fluxo de login seguro e eficaz, com a geração de tokens para sessões autenticadas.

📈 Gerenciamento de produtos
A aplicação permite que os usuários criem, visualizem, atualizem e excluam produtos. Isso abrange todas as operações CRUD, tornando o gerenciador de produtos simples e direto.

➕ Registro de Produtos
Cada produto possui 3 informações nome, preço e descrição. O nome deve ser unico de cada produto.

🔄 Atualização de Produtos
O usuario pode atualizar os dados do produtos como nome, descrição e preço. Após o preenchimento dos campos o usuario deve verificar as alterações via modal de confirmação.

🗑️ Soft Delete
A aplicação emprega o conceito de "Soft Delete", permitindo que os produtos não sejam excluídos do banco de dados. Isso é útil para manter os dados para futuros relatórios.

🔍 Filtros de produto
A aplicação oferece um filtro eficaz para produto com base no seu nome, descrição e preço máximo e mínimo, permitindo que o usuário localize os produtos de forma rápida e eficiente.

### Documentação

A documentação completa da aplicação, com todos os tipos de retorno de cada rota, podem ser encontrados neste link:

```
https://documenter.getpostman.com/view/30335356/2s9YR6au3u
```

É importante lembrar, que para testar as rotas e seus possíveis retornos, é necessário manter a aplicação rodando conforme disposto no início do texto.
