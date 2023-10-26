const resultNumber= document.querySelector("p")

function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

if(min>=max){
    alert( "O valor E tem que ser maior que o valor ENTRE")
    }


    else{
        const result = Math.floor(Math.random() * (max - min) + min) 
        resultNumber.innerHTML= result  

    
    }

    
}

