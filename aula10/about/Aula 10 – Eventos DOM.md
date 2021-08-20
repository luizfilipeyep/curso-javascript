# Aula 10 – Eventos DOM

###### 20/08/2021

Você já entendeu como funciona o DOM com JavaScript? Sabe criar funções em JavaScript? Consegue ligar uma função a um evento em um formulário HTML5 usando JavaScript? Sabe como pegar valores dentro de caixas de texto e fazer cálculos com eles?

------



## O que é?

Um evento DOM é qualquer ação que vai ser disparada ao detectar uma interação.



## Eventos de Mouse

|   Evento   |                                             |
| :--------: | :-----------------------------------------: |
| mouseenter |         quando o mouse está dentro          |
| mousemove  |              ao mover o mouse               |
| mousedown  | quando o botão do mouse estiver pressionado |
|  mouseup   |         ao soltar o botão do mouse          |
|   click    |                  ao clicar                  |
|  mouseout  |         quando o mouse estiver fora         |



## Funções

Conjunto de linhas que só irão ser executadas quando um Evento ocorrer.

~~~javascript
function nomeDaFuncao(parametros) {
    // bloco de código
}
~~~

Eventos podem ser executador tanto na parte HTML como diretamente no JavaScript.



## Eventos no HTML

~~~html
<div id="area" onclick="clicar()">
    Está é uma div que ao ser clicada disparará um Evento.
</div>
~~~

~~~javascript
function clicar() {
    document.getElementById('area').innerText = 'Clicou!'
}
~~~



## EventListeners

Os EventListeners servem para executar uma função sem precisar escrever no HTML.

~~~html
<div id="area">
    Está é uma div que ao ser clicada disparará um Evento.
</div>
~~~

~~~javascript
var a = document.getElementById('area')
a.addEventListener('click', clicar)
function clicar() {
    a.innerText = 'Clicou!'
}
~~~
*Não precisa colo o 'on' do Evento e nem '()' da função*
