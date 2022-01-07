document.addEventListener('keypress', (event) => {
    let sound;
    switch (event.code){
        case 'KeyA':
            sound = new Audio("..\\white_keys\\A.mp3")
            break;
        case 'KeyS':
            sound = new Audio("..\\white_keys\\S.mp3")
            break;
        case 'KeyD':
            sound = new Audio("..\\white_keys\\D.mp3")
            break;
        case 'KeyF':
            sound = new Audio("..\\white_keys\\F.mp3")
            break;
        case 'KeyG':
            sound = new Audio("..\\white_keys\\G.mp3")
            break;
        case 'KeyH':
            sound = new Audio("..\\white_keys\\H.mp3")
            break;
        case 'KeyJ':
            sound = new Audio("..\\white_keys\\J.mp3")
            break;
        case 'KeyW':
            sound = new Audio("..\\black_keys\\W.mp3")
            break;
        case 'KeyE':
            sound = new Audio("..\\black_keys\\E.mp3")
            break;
        case 'KeyT':
            sound = new Audio("..\\black_keys\\T.mp3")
            break;
        case 'KeyY':
            sound = new Audio("..\\black_keys\\Y.mp3")
            break;
        case 'KeyU':
            sound = new Audio("..\\black_keys\\U.mp3")
            break;
    }
    return sound.play();
})