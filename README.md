# HealthSolutionsArchitects

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

1. **Node.js** (v20 ou superior)
2. **Angular CLI** (v18 ou superior)

## Passos para Executar o Projeto Angular

### 1. Instruções

Navegue até o diretório do projeto e instale todas as dependências necessárias:

```bash
  npm install
```

### 2. Executar o Servidor de Desenvolvimento

Após instalar todas as dependências, você pode iniciar o servidor de desenvolvimento:

```bash
  npm start
```

ou o comando:

```bash
  ng serve
```

### 3. Configurar API URL do backend:

Abra o arquivo `src/environments/environment.development.ts` para editar as variáveis de ambiente de desenvolvimento. Um exemplo de configuração pode ser:

```typescript
export const environment = {
  production: false,
  // URL do backend para ambiente de desenvolvimento
  apiUrl: "http://localhost:8080/api/",
};
```

Para o ambiente de produção, edite o arquivo
`src/environments/environment.ts`

```typescript
export const environment = {
  production: true,
  // URL do backend para ambiente de produção
  apiUrl: "https://api.seuservico.com/api",
};
```

Para finalizar a configuração do projeto, você deve configurar o backend. Siga as instruções abaixo para configurar e executar o backend:

1. Visite o repositório do backend

2. Siga as instruções fornecidas no README.md do repositório do backend para configurar e executar o servidor backend.

3. Certifique-se de que o backend esteja em execução e acessível na URL configurada no arquivo de variáveis de ambiente do projeto
