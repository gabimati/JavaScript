# JavaScript

### Como Executar o JS
- Console browsers
- Editores: Sublime, Visual Studio Code
- JS Fiddle https://jsfiddle.net/

### Instalação do Node.js
- Para a gente conseguir executar scripts JS no terminal de comando, precisamos utilizar o Node.js
- Instalação: https://nodejs.org/pt-br/download/package-manager/

* Windows: Primeiro instalar o Chocolatey 
- Precisa executar o PowerShell como administrator
- se tudo der certo na instalação do Chocolatey, rodar: choco install nvs
- nvs add lts
- $ nvs use lts
PATH -= %LOCALAPPDATA%\nvs\default
PATH += %LOCALAPPDATA%\nvs\node\14.17.0\x64

* MacOs: Primeiro intalar o Homebrew
- se tudo der certo na instalação do Homebrew, rodar: brew install node

#### Após concluir a instalação
Rodar em um novo terminal: node -v


## Variáveis
São utilizadas para referenciar espaço na memória

- var
- const (fica com valor imutável)
- let
- string (tipo de variável para conjunto de caracteres)
- tipagem: número ou string
- array: conjunto de valores

## Operadores
- Soma +
- Subtração - 
- Multiplicar *
- Dividir /
- Módulo (resto de divisão) %
- Math: random(), round(), sqrt().

####  Atribuição
a = b
a += b
a -= b
a *= b
a /= b
a %= b
Adiciona 1 ++
Subtrai 1 --

#### Operadores de Comparação / Lógicos
- Igual == ou ===
- Diferente != 
- Maior que >
- Maior ou igual >=
- Menor que <
- Menor que <=

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators

https://jsfiddle.net/kov1nxz9/1/
