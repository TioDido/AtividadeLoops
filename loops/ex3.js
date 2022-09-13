var idade = 0
var idadeJovem = 0
var idadeSenior = 0

while (idade > -99){
    var idade = Number(prompt("Digite sua idade...:"))
    if (idade > 0 && idade <=21){
        idadeJovem ++
    }
    else if (idade >= 50){
        idadeSenior ++
    }
}
alert("Encerrando.")
alert(`Idades jovens : ${idadeJovem}`)
alert(`Idades Seniors: ${idadeSenior}`)