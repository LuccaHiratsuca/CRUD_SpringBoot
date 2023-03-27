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

