const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Qual tag cria um parágrafo?",
        options: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "É uma tag de uma letra apenas",
      },
      {
        question: "Qual atributo adiciona um link para a tag a?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      {
        question: "As listas não ordenadas tem a tag de:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Qual atributo deixa o input obrigatório?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      {
        question: "A tag semântica indicada para rodapés é a:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
      },
      {
        question: "O que significa HTML?",
        options: [
          "Hyper Text Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
        ],
        answer: "Hyper Text Markup Language",
      },
      {
        question: "Quem faz os padrõe da Web?",
        options: [
          "The World Wide Web Consortium",
          "Mozilla",
          "Microsoft",
          "Google",
        ],
        answer: "The World Wide Web Consortium",
      },
      {
        question: "Escolha o elemento HTML correto para para o maior título:",
        options: ["<head>", "<heading>", "<h6>", "<h1>"],
        answer: "<h1>",
      },
      {
        question:
          "Qual é o elemento HTML correto para inserir uma quebra de linha?",
        options: ["<br>", "<lb>", "<break>"],
        answer: "<br>",
      },
      {
        question: "Qual é o HTML correto para adicionar uma cor de fundo?",
        options: [
          '<body style="background-color:yellow;">',
          "<background>yellow</background>",
          '<body bg="yellow">',
        ],
        answer: '<body style="background-color:yellow;">',
      },
      {
        question:
          "Escolha o elemento HTML correto para definir um texto importante",
        options: ["<strong>", "<important>", "<i>", "<b>"],
        answer: "<strong>",
      },
      {
        question:
          "Escolha o elemento HTML correto para definir um texto enfatizado",
        options: ["<em>", "<i>", "<italic>"],
        answer: "<em>",
      },
      {
        question: "Qual é o HTML correto para criar um hiperlink?",
        options: [
          '<a href="http://www.w3schools.com">W3Schools</a>',
          '<a url="http://www.w3schools.com">W3Schools.com</a>',
          "<a>http://www.w3schools.com</a>",
          '<a name="http://www.w3schools.com">W3Schools.com</a>',
        ],
        answer: '<a href="http://www.w3schools.com">W3Schools</a>',
      },
      {
        question: "Qual caractere é usado para indicar uma tag de fechamento?",
        options: ["/", "<", "*", "^"],
        answer: "/",
      },
      {
        question:
          "Como você pode abrir um link em uma nova aba/janela do navegador?",
        options: [
          '<a href="url" target="_blank">',
          '<a href="url" target="new">',
          '<a href="url" new>',
        ],
        answer: '<a href="url" target="_blank">',
      },
      {
        question: "Quais desses elementos são todos elementos <table>?",
        options: [
          "<table><tr><td>",
          "<table><head><tfoot>",
          "<thead><body><tr>",
          "<table><tr><tt>",
        ],
        answer: "<table><tr><td>",
      },
      {
        question:
          "Os elementos Inline normalmente são exibidos sem iniciar uma nova linha.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
      },
      {
        question: "Como você pode fazer uma lista ordenada por números?",
        options: ["<ol>", "<ul>", "<dl>", "<list>"],
        answer: "<ol>",
      },
      {
        question: "Como você pode fazer uma lista com marcadores?",
        options: ["<ul>", "<list>", "<dl>", "<ol>"],
        answer: "<ul>",
      },
      {
        question:
          "Qual é o HTML correto para fazer uma caixa de seleção (checkbox)?",
        options: [
          '<input type="checkbox">',
          "<checkbox>",
          '<input type="check">',
          "<check>",
        ],
        answer: '<input type="checkbox">',
      },
      {
        question: "Qual é o HTML correto para criar um input de texto?",
        options: [
          '<input type="text">',
          "<textfield>",
          '<input type="textfield">',
          '<textinput type="text">',
        ],
        answer: '<input type="text">',
      },
      {
        question: "Qual é o HTML correto para criar uma lista suspensa?",
        options: [
          "<select>",
          '<input type="list">',
          '<input type="dropdown">',
          "<list>",
        ],
        answer: "<select>",
      },
      {
        question: "Qual é o HTML correto para criar uma área de texto?",
        options: [
          "<textarea>",
          '<input type="textbox">',
          '<input type="textarea">',
        ],
        answer: "<textarea>",
      },
      {
        question: "Qual é o HTML correto para inserir uma imagem?",
        options: [
          '<img src="image.gif" alt="MyImage">',
          '<image src="image.gif" alt="MyImage">',
          '<img href="image.gif" alt="MyImage">',
          '<img alt="MyImage">image.gif</img>',
        ],
        answer: '<img src="image.gif" alt="MyImage">',
      },
      {
        question: "Qual é o HTML correto para inserir uma imagem de fundo?",
        options: [
          '<body style="background-image:url(background.gif)">',
          '<background img="background.gif">',
          '<body bg="background.gif>',
        ],
        answer: '<body style="background-image:url(background.gif)">',
      },
      {
        question:
          "Um <iframe> é usado para exibir uma página da web dentro de uma página da web.",
        options: ["Verdadeiro", "Não existe <iframe>", "Falso"],
        answer: "Verdadeiro",
      },
      {
        question: "Comentários HTML começam com <!-- e terminam com -->",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
      },
      {
        question:
          "Os elementos block normalmente são exibidos sem iniciar uma nova linha.",
        options: ["Falso", "Verdadeiro"],
        answer: "Falso",
      },
      {
        question: "Qual elemento HTML define o título de um documento?",
        options: ["<title>", "<head>", "<meta>"],
        answer: "<title>",
      },
      {
        question:
          "Qual atributo HTML especifica um texto alternativo para uma imagem, se a imagem não puder ser exibida?",
        options: ["alt", "src", "title", "longdesc"],
        answer: "alt",
      },
      {
        question: "Qual tipo de documento é correto para HTML5?",
        options: [
          "<!DOCTYPE html>",
          "<!DOCTYPE HTML5>",
          '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd">',
        ],
        answer: "<!DOCTYPE html>",
      },
      {
        question:
          "Qual elemento HTML é usado para especificar um rodapé para um documento ou seção?",
        options: ["<footer>", "<bottom>", "<section>"],
        answer: "<footer>",
      },
      {
        question:
          "Em HTML, você pode incorporar elementos SVG diretamente em uma página HTML.",
        options: ["Verdadeiro", "Falso"],
        answer: "Verdadeiro",
      },
      {
        question:
          "Qual é o elemento HTML correto para reproduzir arquivos de vídeo?",
        options: ["<video>", "<media>", "<movie>"],
        answer: "<video>",
      },
      {
        question:
          "Qual é o elemento HTML correto para reproduzir arquivos de áudio?",
        options: ["<sound>", "<mp3>", "<audio>"],
        answer: "<sound>",
      },
      {
        question: 'O atributo global HTML, "contenteditable" é usado para:',
        options: [
          "Especificar um menu de contexto para um elemento. O menu aparece quando um usuário clica com o botão direito no elemento",
          "Especificar se o conteúdo de um elemento deve ser editável ou não",
          "Retornar a posição da primeira ocorrência encontrada de conteúdo dentro de uma string",
          "Atualizar conteúdo do servidor",
        ],
        answer:
          "Especificar um menu de contexto para um elemento. O menu aparece quando um usuário clica com o botão direito no elemento",
      },
      {
        question: "Em HTML, onblur e onfocus são:",
        options: [
          "elementos HTML",
          "Atributos de evento",
          "Atributos de estilo",
        ],
        answer: "Atributos de evento",
      },
      {
        question: "Os gráficos definidos pelo SVG estão em qual formato?",
        options: ["XML", "HTML", "CSS"],
        answer: "XML",
      },
      {
        question: "O elemento HTML <canvas> é usado para:",
        options: [
          "desenhar gráficos",
          "exibir registros do banco de dados",
          "manipular dados no MySQL",
          "criar elementos arrastáveis",
        ],
        answer: "desenhar gráficos",
      },
      {
        question:
          "Em HTML, qual atributo é usado para especificar que um campo de entrada deve ser preenchido?",
        options: ["required", "validate", "placeholder", "formvalidate"],
        answer: "required",
      },
      {
        question: "Qual tipo de entrada define um controle deslizante?",
        options: ["range", "search", "slider", "controls"],
        answer: "range",
      },
      {
        question:
          "Qual elemento HTML é usado para exibir uma medida de escala dentro de um intervalo?",
        options: ["<range>", "<meter>", "<measure>", "<gauge>"],
        answer: "<meter>",
      },
      {
        question: "Qual elemento HTML define links de navegação?",
        options: ["<nav>", "<navigation>", "<navigate>"],
        answer: "<nav>",
      },
      {
        question: "Em HTML, o que o elemento <aside> define?",
        options: [
          "Conteúdo além do conteúdo da página",
          "O conjunto de caracteres ASCII; para enviar informações entre computadores na Internet",
          "Uma lista de navegação a ser mostrada no lado esquerdo da página",
        ],
        answer: "Conteúdo além do conteúdo da página",
      },
      {
        question:
          "Qual elemento HTML é usado para especificar um cabeçalho para um documento ou seção?",
        options: ["<header>", "<section>", "<head>", "<top>"],
        answer: "<header>",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Qual regra altera a cor de um elemento?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Cor em inglês",
      },
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      {
        question: "A posição que deixa um elemento fixo é a:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
      {
        question: "O que significa CSS?",
        options: [
          "Cascading Style Sheets",
          "Creative Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets",
        ],
        answer: "Cascading Style Sheets",
      },
      {
        question:
          "Qual é o HTML correto para se referir a uma folha de estilo externa?",
        options: [
          '<link rel="stylesheet" type="text/css" href="mystyle.css">',
          '<style src="mystyle.css">',
          "<stylesheet>mystyle.css</stylesheet>",
        ],
        answer: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
      },
      {
        question:
          "Qual o local correto em um documento HTML para se referir a uma folha de estilos externa?",
        options: [
          "Na seção <head>",
          "No final do documento",
          "Na seção <body>",
        ],
        answer: "Na seção <head>",
      },
      {
        question:
          "Qual tag HTML é usada para definir uma folha de estilos interna?",
        options: ["<style>", "<script>", "<css>"],
        answer: "<style>",
      },
      {
        question: "Qual atributo HTML é usado para definir estilos inline?",
        options: ["style", "class", "styles", "font"],
        answer: "style",
      },
      {
        question: "Qual é a sintaxe CSS correta?",
        options: [
          "body {color: black;}",
          "{body:color=black;}",
          "body:color=black;",
          "{body;color:black;}",
        ],
        answer: "body {color: black;}",
      },
      {
        question: "Como você insere um comentário em um arquivo CSS?",
        options: [
          "/* isto é um comentário */",
          '// "isto é um comentário //',
          "' isto é um comentário",
          '// "isto é um comentário"',
        ],
        answer: "/* isto é um comentário */",
      },
      {
        question: "Qual propriedade é usada para alterar a cor de fundo?",
        options: ["background-color", "bgcolor", "color"],
        answer: "background-color",
      },
      {
        question:
          "Como você adiciona uma cor de fundo para todos os elementos <h1>?",
        options: [
          "h1 {background-color:#FFFFFF;}",
          "h1.all {background-color:#FFFFFF;}",
          "all.h1 {background-color:#FFFFFF;}",
        ],
        answer: "h1 {background-color:#FFFFFF;}",
      },
      {
        question:
          "Qual propriedade CSS é usada para alterar a cor do texto de um elemento?",
        options: ["color", "fgcolor", "text-color"],
        answer: "color",
      },
      {
        question: "Qual propriedade CSS controla o tamanho do texto?",
        options: ["font-size", "text-style", "text-size", "font-style"],
        answer: "font-size",
      },
      {
        question:
          "Qual é a sintaxe CSS correta para deixar todos os elementos <p> em negrito?",
        options: [
          "p {font-weight:bold;}",
          "p {text-size:bold;}",
          '<p style="text-size:bold;">',
          '<p style="font-size:bold;">',
        ],
        answer: "p {font-weight:bold;}",
      },
      {
        question: "Como você exibe hiperlinks sem sublinhado?",
        options: [
          "a {text-decoration:none;}",
          "a {decoration:no-underline;}",
          "a {underline:none;}",
          "a {text-decoration:no-underline;}",
        ],
        answer: "a {text-decoration:none;}",
      },
      {
        question:
          "Como fazer com que cada palavra de um texto comece com letra maiúscula?",
        options: [
          "Você não pode fazer isso com CSS",
          "text-transform:capitalize",
          "transform:capitalize",
          "text-style:capitalize",
        ],
        answer: "text-transform:capitalize",
      },
      {
        question:
          "Qual propriedade é usada para alterar a fonte de um elemento?",
        options: ["font-family", "font-weight", "font-style"],
        answer: "font-family",
      },
      {
        question: "Como você deixa o texto em negrito?",
        options: ["font-weight:bold;", "font:bold;", "style:bold;"],
        answer: "font-weight:bold;",
      },
      {
        question:
          "Qual propriedade é usada para alterar a margem esquerda de um elemento?",
        options: ["margin-left", "indent", "padding-left"],
        answer: "margin-left",
      },
      {
        question:
          "Ao usar a propriedade padding; você tem permissão para usar valores negativos?",
        options: ["Não", "Sim"],
        answer: "Não",
      },
      {
        question: "Como você faz uma lista com marcadores quadrados?",
        options: [
          "list-type: square;",
          "list-style-type: square;",
          "list: square;",
        ],
        answer: "list-style-type: square;",
      },
      {
        question: "Como você seleciona um elemento com id 'demo'?",
        options: ["#demo", ".demo", "*demo", "demo"],
        answer: "#demo",
      },
      {
        question: "Como você seleciona elementos com nome de classe ‘test’?",
        options: [".test", "test", "#test", "*test"],
        answer: ".test",
      },
      {
        question:
          "Como você seleciona todos os elementos p dentro de um elemento div?",
        options: ["div p", "div.p", "div + p"],
        answer: "div p",
      },
      {
        question: "Como você agrupa seletores?",
        options: [
          "Separando cada seletor com uma vírgula",
          "Separando cada seletor com um espaço",
          "Separando cada seletor com um sinal de mais",
        ],
        answer: "Separando cada seletor com uma vírgula",
      },
      {
        question: "Qual é o valor padrão da propriedade position?",
        options: ["static", "absolute", "relative", "fixed"],
        answer: "static",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "Dentro de qual elemento HTML colocamos o JavaScript?",
        options: ["<script>", "<scripting>", "<javascript>", "<js>"],
        answer: "<script>",
      },
      {
        question: `Qual é a sintaxe correta para mudar o conteúdo do elemento HTML à seguir?\n\n<p id="demo">This is a demonstration.</p>`,
        options: [
          'document.getElementById("demo").innerHTML = "Hello World!";',
          '#demo.innerHTML = "Hello World!";',
          'document.getElement("p").innerHTML = "Hello World!";',
          'document.getElementByName("p").innerHTML = "Hello World!";',
        ],
        answer: 'document.getElementById("demo").innerHTML = "Hello World!";',
      },
      {
        question: "Qual é o local correto para inserir oJavaScript?",
        options: [
          "Tanto na seção <head> quanto na seção <body> estão corretos",
          "Na seção <body>",
          "Na seção <head>",
        ],
        answer: "Tanto na seção <head> quanto na seção <body> estão corretos",
      },
      {
        question:
          'Qual é a sintaxe correta para se referir a um script externo chamado "xxx.js"?',
        options: [
          '<script src="xxx.js">',
          '<script name="xxx.js">',
          '<script href="xxx.js">',
        ],
        answer: '<script src="xxx.js">',
      },
      {
        question: "O arquivo externo JavaScript deve conter a tag <script>.",
        options: ["Falso", "Verdadeiro"],
        answer: "Falso",
      },
      {
        question: 'Como se escreve "Hello World" em um alert box?',
        options: [
          'alert("Hello World");',
          'msgBox("Hello World");',
          'alertBox("Hello World");',
          'msg("Hello World");',
        ],
        answer: 'alert("Hello World");',
      },
      {
        question: "Como se cria uma função em JavaScript?",
        options: [
          "function myFunction()",
          "function = myFunction()",
          "function:myFunction()]",
        ],
        answer: "function myFunction()",
      },
      {
        question: 'Como se chama uma função com o nome de "myFunction"?',
        options: [
          "myFunction()",
          "call myFunction()",
          "call function myFunction()",
        ],
        answer: "myFunction()",
      },
      {
        question: "Como escrever uma instrução IF em JavaScript?",
        options: ["if (i == 5)", "if i = 5 then", "if i = 5", "if i == 5 then"],
        answer: "if (i == 5)",
      },
      {
        question:
          "Como escrever uma instrução IF para executar algum código se “i” NÃO for igual a 5?",
        options: ["if (i != 5)", "if i <> 5", "if (i <> 5)", "if i =! 5 then"],
        answer: "if (i != 5)",
      },
      {
        question: "Como um loop WHILE começa?",
        options: [
          "while (i <= 10)",
          "while i = 1 to 10",
          "while (i <= 10; i++)",
        ],
        answer: "while (i <= 10)",
      },
      {
        question: "Como um loop FOR começa?",
        options: [
          "for (i = 0; i <= 5; i++)",
          "for (i <= 5; i++)",
          "for (i = 0; i <= 5)",
          "for i = 1 to 5}",
        ],
        answer: "for (i = 0; i <= 5; i++)",
      },
      {
        question: "Como podemos adicionar um comentário em JavaScript?",
        options: [
          "//Isto é um comentário",
          "<!--Isto é um comentário-->",
          "'Isto é um comentário",
        ],
        answer: "//Isto é um comentário",
      },
      {
        question: "Como podemos inserir um comentário com mais de uma linha?",
        options: [
          "/*Este comentário\ntem mais de uma linha*/",
          "//Este comentário\ntem mais de uma linha//",
          "<!--Este comentário\ntem mais de uma linha-->",
        ],
        answer: `/*Este comentário\ntem mais de uma linha*/`,
      },
      {
        question:
          "Qual é a maneira correta de escrever um array em JavaScript?",
        options: [
          'const colors = ["red", "green", "blue"]',
          'const colors = "red", "green", "blue"',
          'const colors = (1:"red", 2:"green", 3:"blue")',
          'const colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        ],
        answer: 'const colors = ["red", "green", "blue"]',
      },
      {
        question:
          "Como arredondar o número 7,25 para o número inteiro mais próximo?",
        options: [
          "Math.round(7.25)",
          "round(7.25)",
          "Math.rnd(7.25)",
          "rnd(7.25)",
        ],
        answer: "Math.round(7.25)",
      },
      {
        question: "Como encontrar o maior valor entre x e y?",
        options: [
          "Math.max(x, y)",
          "top(x, y)",
          "Math.ceil(x, y)",
          "ceil(x, y)",
        ],
        answer: "Math.max(x, y)",
      },
      {
        question:
          'Qual é a sintaxe correta em JavaScript para abrir uma nova janela chamada "w2" ?',
        options: [
          'w2 = window.new("http://www.w3schools.com");',
          'w2 = window.open("http://www.w3schools.com");',
        ],
        answer: 'w2 = window.open("http://www.w3schools.com");',
      },
      {
        question: "JavaScript é o mesmo que Java.",
        options: ["Falso", "Verdadeiro"],
        answer: "Falso",
      },
      {
        question: "Como você pode detectar o nome do navegador do cliente?",
        options: ["client.navName", "navigator.appName", "browser.name"],
        answer: "navigator.appName",
      },
      {
        question:
          "Qual evento ocorre quando o usuário clica em um elemento HTML?",
        options: ["onmouseclick", "onchange", "onmouseover", "onclick"],
        answer: "onclick",
      },
      {
        question: "Como podemos declarar uma variável em JavaScript?",
        options: ["const carName;", "variable carName;", "v carName;"],
        answer: "const carName;",
      },
      {
        question:
          "Qual operador é usado para atribuir um valor a uma variável?",
        options: ["=", "*", "-", "x"],
        answer: "=",
      },
      {
        question: "Qual será o retorno do seguinte código: Boolean(10 > 9)",
        options: ["Verdadeiro", "Falso", "NaN"],
        answer: "Verdadeiro",
      },
      {
        question: "JavaScript é case-sensitive?",
        options: ["Sim", "Não"],
        answer: "Sim",
      },
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Qual destas propriedades dá a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
    ],
  },
];

export default data;
