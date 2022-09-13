var i = 0
var numPar = 0
var numImpar = 0

for (i = 0; i <= 10; i++) { 
    if (i % 2 == 0) {
        console.log(`Numeros par...: ${i}`)
        numPar ++
        console.log(`Quantidade de numeros pares...: ${numPar}`)
        
    }


    for (i = 0; i <= 10; i++) {
        if (i % 3 == 1){
            console.log(`Numeros impar...: ${i}`)
            numImpar ++
            console.log(`Quantidade de impar...: ${numImpar}`)
            
        }
    }
}