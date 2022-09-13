// ATIVIDADE 6
// Escrever um programa que receba vários números inteiros no teclado. E no final imprimir a média 
// dos números múltiplos de 3. Para sair digitar 0(zero).(DO...WHILE)

var i = 0
var i2 = 0 //SOMA DO MÚLTIPLO DE 3 + A ENTRADA ATUAL
var media = 0
var multiplo = 0
do{
    i = Number(prompt("Digite o numero"))
    if(i % 3 == 0  && i!=0){
        i2=i+i2; multiplo++
 }
        media=i2/multiplo
 }
while(i != 0)
alert(`Media atual ${media}`)