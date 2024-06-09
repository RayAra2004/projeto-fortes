function nextPart(nextPart){
    const currentPart = JSON.parse(localStorage.getItem('currentPartRegisterProject'));

    if(nextPart === currentPart + 1 || nextPart < currentPart){
        console.log('entrei')
        const elements = document.querySelectorAll(`.part${nextPart}`);
        elements.forEach(element => {
            element.style.display = 'flex';
        })

        const oldElements = document.querySelectorAll(`.part${currentPart}`);
        oldElements.forEach(element => {
            element.style.display = 'none';
        })

        localStorage.setItem('currentPartRegisterProject', JSON.stringify(nextPart));
    } else if(nextPart == 1){
        localStorage.setItem('currentPartRegisterProject', JSON.stringify(nextPart));
    }

    
}