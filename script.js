function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

if(min>=max){
    alert( "valor Entre tem que ser maior que valor E")
    }


    else{
        const result = Math.floor(Math.random() * (max - min) + min)   

    alert(result)
    }

    
}

