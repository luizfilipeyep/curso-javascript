# Aula 15 – Variáveis Compostas

###### 13/09/2021

Você sabe como funciona um array em JavaScript? Sabe qual é a vantagem em usar variáveis compostas em JavaScript? Consegue pensar em uma maneira de simplificar seus códigos em JavaScript, tornando-os menores?

------



## Variáveis

* **Variáveis Simples** só conseguem armazenar <u>um valor</u> por vez.
* **Variáveis Compostas** devem ser capazes de armazenar <u>vários valores</u> em uma mesma estrutura.



## Variáveis Compostas

array ou vetor, composto de elementos, índice e conteúdo

![Screenshot_1](C:\Users\Luiz\dev\curso-javascript\aula15\about\Screenshot_1.png)

~~~ javascript
let num = [5, 8, 4] // cria um array
~~~

### Acrescentar valor à um array

~~~javascript
num[3] = 6 // acrescenta ao array num o valor 6 na posição 3
num.push(7) // acrescenta o valor 7 na última posição de num criando um novo elemento
~~~

### Descobrir comprimento de um array

~~~javascript
num.length // comprimento do array num
~~~

### Ordenar elementos do vetor

~~~javascript
num.sort() // ordena os elementos do vetor em ordem crescente
~~~

### Mostrar elementos de cada posição

~~~javascript
console.log(num[0]) // mostra o elemento que está na posição 0

for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

for (let pos in valores) {
    console.log(num[pos])
}
~~~

### Buscando elemento no vetor

~~~javascript
num.indexOf(7)

* caso não se encontrar o valor, será retornado -1
~~~

