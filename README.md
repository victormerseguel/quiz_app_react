# Quiz App

Criação de um quiz em estilo app para exercitar conhecimentos de React, Javascript, CSS e HTML.
Neste projeto não utilizazmos o gerenciamento de rotas por meio do ReactDOM, ao invés disso, fizemos renderização condicional no elemento pai "App", onde por meio de estados que são gerenciados pelo context "quiz.jsx", os componentes são trocados.

Neste App existem as seguintes funcionalidades:

- página de início do quiz
- página com escolha dinâmica de uma entre as todas as linguagens disponíveis no arquivo de dados base;
- disposição aletória das questões existentes no arquivo base;
- formatação css condicional de acordo com a resposta certa;
- disponibilização de dicas, também pré estipuladas no documento base;
- funcionalidade de esconder uma resposta errada, como ajuda;
- contagem de pontos;
- tela final com pontuação e redirecionamento para o início.

---

Possibilidades de incrementos e melhorias:

- aumentar a base de dados com novas perguntas;
- melhorar o sistema de aleatoriedade das perguntas;
- implementar o sistema de aleatoriedade para a exibição das opções;
- limitar a quantidade de ajudas que o usuário pode ter ao longo do jogo;
- adicionar mostrador de ajudas restantes;
- formatação condicional para a resposta errada selecionada;
- criar uma nova forma de pontuação;
- criar uma classificação final de acordo com a pontuação, com mensagens coerentes com cada nível;
