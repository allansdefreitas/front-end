// function playSongPom(){
//     document.querySelector('#som_tecla_pom').play();
// }

// function playSongClap(){
//     document.querySelector('#som_tecla_clap').play();
// }

// function playSongTim(){
//     document.querySelector('#som_tecla_tim').play();
// }

// function playSongPuff(){
//     document.querySelector('#som_tecla_puff').play();
// }

// function playSongSplash(){
//     document.querySelector('#som_tecla_splash').play();
// }

// function playSongToim(){
//     document.querySelector('#som_tecla_toim').play();
// }

// function playSongPsh(){
//     document.querySelector('#som_tecla_psh').play();
// }

// function playSongTic(){
//     document.querySelector('#som_tecla_tic').play();
// }

// function playSongTom(){
//     document.querySelector('#som_tecla_tom').play();
// }

// A generic function
function playSong(selector){
    const element = document.querySelector(selector);
    
    // console.log(element);
    if(element === null){ // we could write if(element) to test if it is null
        // alert('Element not found');
        console.error('Element not found');
    } else if (element.localName === "audio"){
        element.play();
    }else{
        console.error('Element is not reproducible')
    }
}


const listOfKeys = document.querySelectorAll('.tecla');
// const listOfSounds = document.querySelectorAll('audio').play;


for(let ith = 0; ith < listOfKeys.length; ith++){

    const key = listOfKeys[ith];
    const instrumentName = key.classList[1];
    const idAudioSelector = `#som_${instrumentName}` // Template String. Put js code in a string

    // Create an anonym function. It does not run immediately
    key.onclick = function(){
        playSong( idAudioSelector);
    }

    key.onkeydown = function(event){

        console.log(event.code); 
        // console.log(event.code == "Space");

        if(event.code === "Enter" || event.code === "Space"){
            key.classList.add('ativa')
            // console.log('added');
        }
    };

    key.onkeyup = function(){
        key.classList.remove('ativa');
        // console.log('removed');
    }
}


// let ith = 0;

// while(ith < listOfKeys.length){

//     const key = listOfKeys[ith];
//     const instrumentName = key.classList[1];
    
//     const idAudioSelector = `#som_${instrumentName}` // Template String. Put js code in a string

//     // Create an anonym function. It does not run immediately
//     key.onclick = function(){
//         playSong( idAudioSelector);
//     }
//     ith = ith + 1;
// }

