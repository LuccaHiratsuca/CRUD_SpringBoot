# Projeto Spring Boot com React Ts
Projeto desenvolvido com backend em Java SpringBoot e frontend em React Ts

## Front-end
### Estrutura das pastas:

`assets`: Serve para armazenar imagens (imagens leves, se forem pesadas sempre prefira hospedar em uma CDN), ícones, etc.

`components`: Componentes reutilizáveis da aplicação. Componentes que são unidades para sua aplicação, um button, um modal, etc.

`pages`: As pages que usam vários componentes. É essa a página que o usuário vai ver.

`hooks`: Essa pasta é utilizada para armazenar hooks que são genéricos, tem interação com hooks do React (useState, useEffet) e normalmente são reutilizáveis em qualquer projeto, exemplos: useScreenSize, useLocalStorage, useSessionStorage, useUserActive.

`services`: Aqui ficam as configurações de HTTP clients, normalmente utilizando axios.

`store`: Ficam as definições de state managers, context api, zustand, redux.

`types`: Armazena as tipagens de typescript (types e interfaces) que são comuns em várias áreas do projeto.

`util`: Funções utilitárias como formatCurrency, formatPhone, convertTimezone, parsePhone, etc. (Javascript puro)

`test`: Onde fica o setup para os testes

### CSS - Module
[StackOverFlow](https://stackoverflow.com/questions/41336858/how-to-import-css-modules-with-typescript-react-and-webpack)

Para importar o CSS como module
1. Adicionar no arquivo `index.d.ts`:
    ```
    declare module "*.module.css";
    declare module "*.module.scss";
    ```
2. Em `vite.config.ts`, adicionar:
    ```
    "plugins": [{ "name": "typescript-plugin-css-modules" }]
    ```

### Testes:
Para realizar testes foi utilizado o [vitest](!https://vitest.dev/)

1. Para adicionar ao projeto:
    ```
    yarn add -D vitest
    ```
2. Caso já esteja com vite em package.json adicionar (em scripts):
    ```
    "test":"vitest"
    ```
3. Adicionar as seguintes bibliotecas (npm ou yarn):
- @testing-library/react
- @testing-library/jest-dom
- @testing-library/react-hooks
- @testing-library/user-event 
- jest-without-globals

    Exemplo:
    ```
    yarn add @testing-library/user-event
    ```

4. Em `./src/` criar uma pasta chamada `tests` e dentro dessa, um arquivo denominado `setup.ts`, dentro dele, adicionar:

    Esse arquivo será responsável por gerenciar os testes

    ```
    import "@testing-library/jest-dom";
    import '@testing-library/jest-dom/extend-expect'
    ```

5. Em `vite.config.ts` adicionar "test", arrumar import "from 'vitest/config'" e não esquecer as referências.

    ```
    /// <reference types="vitest" />
    /// <reference types="vite/client" />

    import { defineConfig } from 'vitest/config';
    ...
    export default defineCongi({
    ... 
        test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/tests/setup.ts",
        css: true,
        }
    })
    ```

