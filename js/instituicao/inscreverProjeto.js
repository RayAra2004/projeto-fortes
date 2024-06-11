function nextPart(nextPart){
    const currentPart = JSON.parse(localStorage.getItem('currentPartRegisterProject'));
    const title = document.getElementById("title");

    if(nextPart === currentPart + 1 || nextPart < currentPart){
        const elements = document.querySelectorAll(`.part${nextPart}`);
        elements.forEach(element => {
            element.style.display = 'block';

            if(element.classList.contains("divBtnsForm")) {
                element.style.display = 'flex';
            }
        })

        const oldElements = document.querySelectorAll(`.part${currentPart}`);
        oldElements.forEach(element => {
            element.style.display = 'none';
        })

        const odlButton = document.querySelector(`#btnPart${currentPart}`);
        odlButton.classList.remove('btn-background');

        const button = document.querySelector(`#btnPart${nextPart}`);
        button.classList.add('btn-background');

        switch (nextPart){
            case 1:
                title.textContent = "Resumo do Projeto";
                break;
            case 2:
                title.textContent = "Equipe de Profissionais que Atuarão no Projeto";
                break;
            case 3:
                title.textContent = "Cronograma Físico-Financeiro de Execução do Projeto";
                break;
            case 4:
                title.textContent = "Plano de Aplicação";
                break;
            default:
                title.textContent = ""
        }

        localStorage.setItem('currentPartRegisterProject', JSON.stringify(nextPart));
    } else if(nextPart == 1){
        localStorage.setItem('currentPartRegisterProject', JSON.stringify(nextPart));
    }    
}

function validatePart(part){
    nextPart(part);
}