// selection 
let dec = document.querySelectorAll('.decrease')
console.log('dec:', dec)

let inc = document.querySelectorAll('.increase')
console.log('inc:', inc)

let ligne = document.querySelectorAll('.ligne1')
console.log('ligne:', ligne)

let del = document.querySelectorAll('.delete')
console.log('del:', del)

let quantite = document.querySelectorAll('.quant')
console.log('quantite:', quantite)

let prix = document.querySelectorAll('.prix')
console.log('prix:', prix)

let total = document.querySelector('.total')
console.log('prixTotal:', total)

let image = document.querySelectorAll('.image')
console.log('like:', image)

//calcul total
 function ubdatetotal() {
     let prixTotal = 0 
     
     for (let i = 0; i < quantite.length; i++ ){ 
        //  console.log(quantite[i].value)
        //  console.log(prix[i].innerHTML)
        prixTotal = prixTotal + quantite[i].value * parseInt(prix[i].innerHTML) 
     }
     console.log ('totalPrice:' ,prixTotal)
     total.innerHTML = prixTotal + 'DA'
 }
ubdatetotal()

// increment 
for (let i = 0; i < inc.length; i++){
    inc[i].addEventListener('click', inrementation) 
    function inrementation(){
        quantite[i].value++ 
        ubdatetotal()
    }
}


// dencrement 
for (let i = 0; i < dec.length; i++){
    dec[i].addEventListener('click', decrementation) 
    function decrementation(){
       if( quantite[i].value >= 0) {
           quantite[i].value--
           ubdatetotal()
       }
    }
}


// delete product

for (let i = 0; i < del.length; i++) {
    del[i].addEventListener('click', deletion)
    function deletion (){
        ligne[i].remove()
        quant[i].value = 0
        ubdatetotal()

    }
}

for (let i = 0; i < image.length; i++) {

    image[i].addEventListener('click', like)
    
    function like (){
        console.log("color is black" , i)
        if (image[i].style.color == 'black'){
           
            image[i].style.color = 'red'
        } else {
            image[i].style.color = 'black'
        }
      
        ubdatetotal()

    }
}



