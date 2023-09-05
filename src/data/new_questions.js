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
        options: [
          'document.getElementById("demo").innerHTML = "Hello World!”;',
          '#demo.innerHTML = "Hello World!”;',
          'document.getElement("p").innerHTML = "Hello World!”;',
          'document.getElementByName("p").innerHTML = "Hello World!”;',
        ],
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
        options: ["true", "false", "NaN"],
        answer: "true",
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

// Question 1:
// What does CSS stand for?
// Cascading Style Sheets    Your answer
// Creative Style Sheets
// Computer Style Sheets
// Colorful Style Sheets
// Question 2:
// What is the correct HTML for referring to an external style sheet?

// <link rel="stylesheet" type="text/css" href="mystyle.css">    Your answer
// <style src="mystyle.css">
// <stylesheet>mystyle.css</stylesheet>
// Question 3:
// Where in an HTML document is the correct place to refer to an external style sheet?

// In the <head> section    Your answer
// At the end of the document
// In the <body> section
// Question 4:
// Which HTML tag is used to define an internal style sheet?

// <style>    Your answer
// <script>
// <css>
// Question 5:
// Which HTML attribute is used to define inline styles?

// style    Your answer
// class
// styles
// font
// Question 6:
// Which is the correct CSS syntax?

// body {color: black;}    Your answer
// {body:color=black;}
// body:color=black;
// {body;color:black;}
// Question 7:
// How do you insert a comment in a CSS file?

// /* this is a comment */    Your answer
// // this is a comment //
// ' this is a comment
// // this is a comment
// Question 8:
// Which property is used to change the background color?

// background-color    Your answer
// bgcolor
// color
// Question 9:
// How do you add a background color for all <h1> elements?

// h1 {background-color:#FFFFFF;}    Your answer
// h1.all {background-color:#FFFFFF;}
// all.h1 {background-color:#FFFFFF;}
// Question 10:
// Which CSS property is used to change the text color of an element?

// color    Your answer
// fgcolor
// text-color
// Question 11:
// Which CSS property controls the text size?

// font-size    Your answer
// text-style
// text-size
// font-style
// Question 12:
// What is the correct CSS syntax for making all the <p> elements bold?

// p {font-weight:bold;}    Your answer
// p {text-size:bold;}
// <p style="text-size:bold;">
// <p style="font-size:bold;">
// Question 13:
// How do you display hyperlinks without an underline?

// a {text-decoration:none;}    Your answer
// a {decoration:no-underline;}
// a {underline:none;}
// a {text-decoration:no-underline;}
// Question 14:
// How do you make each word in a text start with a capital letter?

// You can't do that with CSS    Your answer
// text-transform:capitalize    Correct answer
// transform:capitalize
// text-style:capitalize
// Question 15:
// Which property is used to change the font of an element?

// font-family    Your answer
// font-weight
// font-style
// Question 16:
// How do you make the text bold?

// font-weight:bold;    Your answer
// font:bold;
// style:bold;
// Question 17:
// How do you display a border like this:

// The top border = 10 pixels
// The bottom border = 5 pixels
// The left border = 20 pixels
// The right border = 1pixel?

// border-width:10px 20px 5px 1px;    Your answer
// border-width:10px 1px 5px 20px;    Correct answer
// border-width:5px 20px 10px 1px;
// border-width:10px 5px 20px 1px;
// Question 18:
// Which property is used to change the left margin of an element?

// margin-left    Your answer
// indent
// padding-left
// Question 19:
// When using the padding property; are you allowed to use negative values?

// No    Your answer
// Yes
// Question 20:
// How do you make a list that lists its items with squares?

// list-type: square;    Your answer
// list-style-type: square;    Correct answer
// list: square;
// Question 21:
// How do you select an element with id 'demo'?

// #demo    Your answer
// .demo
// *demo
// demo
// Question 22:
// How do you select elements with class name 'test'?

// .test    Your answer
// test
// #test
// *test
// Question 23:
// How do you select all p elements inside a div element?

// div p    Your answer
// div.p
// div + p
// Question 24:
// How do you group selectors?

// Separate each selector with a comma    Your answer
// Separate each selector with a space
// Separate each selector with a plus sign
// Question 25:
// What is the default value of the position property?

// static    Your answer
// absolute
// relative
// fixed

// ------------------------------ HTML ------------------------------
// Question 1:
// What does HTML stand for?

// Hyper Text Markup Language    Your answer
// Home Tool Markup Language
// Hyperlinks and Text Markup Language
// Question 2:
// Who is making the Web standards?

// The World Wide Web Consortium    Your answer
// Mozilla
// Microsoft
// Google
// Question 3:
// Choose the correct HTML element for the largest heading:

// <head>    Your answer
// <heading>
// <h6>
// <h1>    Correct answer
// Question 4:
// What is the correct HTML element for inserting a line break?

// <br>    Your answer
// <lb>
// <break>
// Question 5:
// What is the correct HTML for adding a background color?

// <body style="background-color:yellow;">    Your answer
// <background>yellow</background>
// <body bg="yellow">
// Question 6:
// Choose the correct HTML element to define important text

// <strong>    Your answer
// <important>
// <i>
// <b>
// Question 7:
// Choose the correct HTML element to define emphasized text

// <em>    Your answer
// <i>
// <italic>
// Question 8:
// What is the correct HTML for creating a hyperlink?

// <a href="http://www.w3schools.com">W3Schools</a>    Your answer
// <a url="http://www.w3schools.com">W3Schools.com</a>
// <a>http://www.w3schools.com</a>
// <a name="http://www.w3schools.com">W3Schools.com</a>
// Question 9:
// Which character is used to indicate an end tag?

// /    Your answer
// <
// *
// ^
// Question 10:
// How can you open a link in a new tab/browser window?

// <a href="url" target="_blank">    Your answer
// <a href="url" target="new">
// <a href="url" new>
// Question 11:
// Which of these elements are all <table> elements?

// <table><tr><td>    Your answer
// <table><head><tfoot>
// <thead><body><tr>
// <table><tr><tt>
// Question 12:
// Inline elements are normally displayed without starting a new line.

// True    Your answer
// False
// Question 13:
// How can you make a numbered list?

// <ol>    Your answer
// <ul>
// <dl>
// <list>
// Question 14:
// How can you make a bulleted list?

// <ul>    Your answer
// <list>
// <dl>
// <ol>
// Question 15:
// What is the correct HTML for making a checkbox?

// <input type="checkbox">    Your answer
// <checkbox>
// <input type="check">
// <check>
// Question 16:
// What is the correct HTML for making a text input field?

// <input type="text">    Your answer
// <textfield>
// <input type="textfield">
// <textinput type="text">
// Question 17:
// What is the correct HTML for making a drop-down list?

// <select>    Your answer
// <input type="list">
// <input type="dropdown">
// <list>
// Question 18:
// What is the correct HTML for making a text area?

// <textarea>    Your answer
// <input type="textbox">
// <input type="textarea">
// Question 19:
// What is the correct HTML for inserting an image?

// <img src="image.gif" alt="MyImage">    Your answer
// <image src="image.gif" alt="MyImage">
// <img href="image.gif" alt="MyImage">
// <img alt="MyImage">image.gif</img>
// Question 20:
// What is the correct HTML for inserting a background image?

// <body style="background-image:url(background.gif)">    Your answer
// <background img="background.gif">
// <body bg="background.gif">
// Question 21:
// An <iframe> is used to display a web page within a web page.

// True    Your answer
// There is no such thing as an <iframe>
// False
// Question 22:
// HTML comments start with <!-- and end with -->

// True    Your answer
// False
// Question 23:
// Block elements are normally displayed without starting a new line.

// False    Your answer
// True
// Question 24:
// Which HTML element defines the title of a document?

// <title>    Your answer
// <head>
// <meta>
// Question 25:
// Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?

// alt    Your answer
// src
// title
// longdesc
// Question 26:
// Which doctype is correct for HTML5?

// <!DOCTYPE html>    Your answer
// <!DOCTYPE HTML5>
// <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd">
// Question 27:
// Which HTML element is used to specify a footer for a document or section?

// <footer>    Your answer
// <bottom>
// <section>
// Question 28:
// In HTML, you can embed SVG elements directly into an HTML page.

// True    Your answer
// False
// Question 29:
// What is the correct HTML element for playing video files?

// <video>    Your answer
// <media>
// <movie>
// Question 30:
// What is the correct HTML element for playing audio files?

// <sound>    Your answer
// <mp3>
// <audio>    Correct answer
// Question 31:
// The HTML global attribute, "contenteditable" is used to:

// Specifies a context menu for an element. The menu appears when a user right-clicks on the element    Your answer
// Specify whether the content of an element should be editable or not    Correct answer
// Return the position of the first found occurrence of content inside a string
// Update content from the server
// Question 32:
// In HTML, onblur and onfocus are:

// HTML elements    Your answer
// Event attributes    Correct answer
// Style attributes
// Question 33:
// Graphics defined by SVG is in which format?

// XML    Your answer
// HTML
// CSS
// Question 34:
// The HTML <canvas> element is used to:

// draw graphics    Your answer
// display database records
// manipulate data in MySQL
// create draggable elements
// Question 35:
// In HTML, which attribute is used to specify that an input field must be filled out?

// required    Your answer
// validate
// placeholder
// formvalidate
// Question 36:
// Which input type defines a slider control?

// range    Your answer
// search
// slider
// controls
// Question 37:
// Which HTML element is used to display a scalar measurement within a range?

// <range>    Your answer
// <meter>    Correct answer
// <measure>
// <gauge>
// Question 38:
// Which HTML element defines navigation links?

// <nav>    Your answer
// <navigation>
// <navigate>
// Question 39:
// In HTML, what does the <aside> element define?

// Content aside from the page content    Your answer
// The ASCII character-set; to send information between computers on the Internet
// A navigation list to be shown at the left side of the page
// Question 40:
// Which HTML element is used to specify a header for a document or section?

// <header>    Your answer
// <section>
// <head>
// <top>
