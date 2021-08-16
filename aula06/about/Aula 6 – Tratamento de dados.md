# Aula 6 – Tratamento de dados

###### 16/08/2021

Você já aprendeu a manipular dados em JavaScript? Sabe como guardar o resultado de um prompt dentro de uma variável? Sabe converter String para Número em JavaScript? Consegue formatar um número para que ele se pareça com um valor monetário usando JavaScript?

------

## Manipulando dados com JavaScript

Aqui vamos pegar um dado obtido através de um prompt e mostra-lo em um alerta.

Para fazer isso, precisamos primeiro guardar o dado recebido pelo prompt em uma variável, utilizando o comando <prompt>, dentro da variável:

~~~javascript
var nome = windows.prompt('Qual é seu nome?') // cria uma variável (nome) e dentro um prompt
~~~

Para mostrar em uma alerta, vamos colocar a variável dentro do <alert>:

~~~~javascript
window.alert(nome) // mostra os dados que estão em (nome) em um alerta
~~~~



## Concatenação

Concatenar = Juntar]

Para isso utilizamos o sinal de + e depois o nome da variável

~~~javascript
window.alert('É um grande prazer em te conhecer,' + nome + '!') // concatenação
~~~



## Somando variáveis

Vamos criar uma programa para criar uma soma entre dois valores obtidos nas variáveis <n1> e <n2>:

~~~javascript
var n1 = window.prompt('Digite um número:') // string
var n2 = window.prompt('Digite outro número:') // string
var s = n1 + n2
window.alert('A soma dos valores é ' + s) // concatenação
// + (number + number) para adição
// + (string + string) para concatenação
~~~

Esperamos que o resultado desse programa seja a soma de n1 + n2 em número, por exemplo se n1=1 e n2=5, então s=6. Porém não é isto que acontece, o resultado deste programa será 15, porque s não está somando duas variáveis do tipo number e sim string, pois o prompt automaticamente pega variáveis do tipo string.

Então o que precisamos fazer é converter n1 e n2 para number, para fazer isto utilizamos os seguintes comandos:



## Para converter para número inteiro

~~~javascript
Number.parseInt(n)
~~~
*n é uma variável



## Para converter para número flutuante

~~~javascript
Number.parseFloat(n)
~~~
*n é uma variável



------


~~~javascript
var n1 = Number.parseInt(window.prompt('Digite um número:')) // string
var n2 = Number.parseInt(window.prompt('Digite outro número:')) // string
var s = n1 + n2
window.alert('A soma dos valores é ' + s) // concatenação
// + (number + number) para adição
// + (string + string) para concatenação
~~~

Agora se n1=1 e n2=5, s=6.

------



## Forma simplificada de conversão de números

Também podemos utilizar esta forma, que faz com que o JavaScript seja capaz de detectar automaticamente se o número recebido é inteiro ou flutuante.

~~~javascript
Number(n)
~~~
*n é uma variável



## Convertendo de Number para String

Podemos usar os comando:

~~~javascript
String(n)
n.toString()
~~~
*n é uma variável



------

~~~javascript
var n1 = Number(window.prompt('Digite um número:')) // string
var n2 = Number(window.prompt('Digite outro número:')) // string
var s = n1 + n2
window.alert('A soma dos valores é ' + String(s)) // concatenação
// + (number + number) para adição
// + (string + string) para concatenação
~~~

------



## Formatação de Strings

### Template String

Em um programa que se usa muita concatenação, pode ficar confuso na hora de digitar o código, por isso utilizamos a *template string* para facilitar. Para isso em vês de aspas na nossa String vamos utilizar crase e uma nova forma de colocar a variável utilizando **${nomeDaVariavel}**, chamado de *placeholder*:

~~~javascript
var s = 'JavaScript'
window.alert = `Eu estou aprendendo ${s}`
~~~

Exemplo:

~~~javascript
var nome = 'Gustavo'
var idade = 41
var nota = 5.5
window.alert = `O aluno ${nome} com ${idade} anos tirou a nota ${nota}`
~~~

### Contar quantos caracteres a String tem

~~~javascript
s.legth
~~~

### Passar tudo para maiúsculo

~~~javascript
s.toUpperCase()
~~~

### Passar tudo para minúsculo

~~~javascript
s.toLowerCase()
~~~



## Escrevendo na tela

Vamos escrever algo no documento HTML com JavaScript usando o comando **write**:

~~~javascript
document.write('Olá, mundo!')
~~~

Você também pode escrever um HTML dentro:

~~~javascript
document.write('<h2>Este é um título</h2>')
~~~



## Formatação de números

~~~javascript
n.toFixed(2) // formata o número com duas casas decimais
n.toFixed().replace('.', ',') // troca . por ,
n.toLocalString('pt-BR', {style: 'currency', currrency: 'BRL'}) // formatar um número em moeda, neste caso o real brasileiro
n.toLocalString('pt-BR', {style: 'currency', currrency: 'USD'}) // formatar um número em moeda, neste caso o dólar
n.toLocalString('pt-BR', {style: 'currency', currrency: 'EUR'}) // formatar um número em moeda, neste caso o euro
~~~

