Aula 7 – Operadores (Parte1)

###### 17/08/2021

Você já sabe como fazer cálculos usando JavaScript? Conhece os operadores aritméticos do JavaScript? Consegue entender a ordem de precedência dos operadores em JavaScript? Consegue utilizar os operadores de incremento (pré-incremento e pós-incremento) no JavaScript?

------



## Aritméticos

| Operadores |          Função          |
| :--------: | :----------------------: |
|   **+**    |           Soma           |
|   **-**    |        Subtração         |
|   *****    |      Multiplicação       |
|   **/**    |       Divisão Real       |
|   **%**    | Resto da Divisão Inteira |
|   ******   |         Potência         |

*Ordem de precedência: **()** | ****** | ***** **/** **%** | **+** **-**



## Atribuição

| Operador |   Função   |
| :------: | :--------: |
|  **=**   | Atribuição |

### Atribuição Simples

~~~javascript
var a = 5 + 3 // 8
var b = a % 5 // 3
var c = 5 * b ** 2 // 45
var d = 10 - a / 2 // 6
var e = 6 * 2 / d // 2
var f = b % e + 4 / e // 3
~~~

### Auto-atribuições

~~~javascript
var n = 3 // 3
n = n + 4 // 7
n // 7

n = n - 5 // 2
n // 2

n = n * 4 // 8
n = n / 2 // 4
n = n ** 2 // 16
n = n % 5 // 1
~~~

| Simplificando / Operador |     Função     |
| :----------------------: | :------------: |
|        n **+=** 4        | **n = n +** 4  |
|        n **-=** 5        | **n = n -** 5  |
|        n ***=** 4        | **n = n *** 4  |
|        n **/=** 2        | **n = n /** 2  |
|     n ********=** 2      | **n = n **** 2 |
|        n **%=** 5        | **n = n %** 5  |



## Incremento

| Operador |    Função     |
| :------: | :-----------: |
| **x++**  | **x = x + 1** |
| **x--**  | **x = x - 1** |
| **++x**  |       -       |
| **--x**  |       -       |

