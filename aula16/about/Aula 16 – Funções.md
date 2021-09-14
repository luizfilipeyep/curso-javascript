# Aula 16 – Funções

###### 14/09/2021

Você sabe usar funções em JavaScript? Sabe como aplicar o uso de rotinas em seus códigos para torná-los mais simples? Sabe como usar uma função como resposta a um determinado evento? Sabe como realizar a passagem de parâmetros entre códigos JavaScript?

------



## Funções

São **ações** executadas assim que são **chamadas** ou em decorrência de algum **evento**.

![Screenshot_1](C:\Users\Luiz\dev\curso-javascript\aula16\about\Screenshot_1.png)

Uma função pode receber **parâmetros** e retornar um **resultado**.

![Screenshot_2](C:\Users\Luiz\dev\curso-javascript\aula16\about\Screenshot_2.png)

~~~javascript
function parimp(n) {
    if (n%2==0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}
let res = parimp(11)
~~~

