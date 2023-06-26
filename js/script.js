

for (i=0; i < 5; i++){
    aNumber = randomNumber(1, 10)
    let computerNumber = aNumber 
    
    console.log('computerNumber', computerNumber, typeof computerNumber)
    
}



setTimeout(clock, 3000);

function clock(){
    prompt('scrivi in sequenza i numeri memorizzati')
    prompt('scrivi in sequenza i numeri memorizzati')
    prompt('scrivi in sequenza i numeri memorizzati')
    prompt('scrivi in sequenza i numeri memorizzati')
    prompt('scrivi in sequenza i numeri memorizzati')

    if(computerNumber == prompt){

        console.log('hai vinto')
    }
    else{
        console.log('hai perso')
    }


}













/*
    FUNCTIONS
*/


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }