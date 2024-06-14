let currentPartCurrent = JSON.parse(localStorage.getItem('currentPartRegisterProject'));
if(!currentPartCurrent) {
    localStorage.setItem('currentPartRegisterProject', JSON.stringify(1))
    currentPartCurrent = 1;
}
const elements = document.querySelectorAll(`.part${currentPartCurrent}`);
elements.forEach(element => {
    element.style.display = 'block';

    if(element.classList.contains("divBtnsForm") || element.classList.contains("d-flex")) {
        element.style.display = 'flex';
    }
})

const btn = document.getElementById(`btnPart${currentPartCurrent}`);
btn.classList.add("btn-background")

for(let i = 1; i <= 4; i++){
    if(i != currentPartCurrent){
        const elements = document.querySelectorAll(`.part${i}`);
        elements.forEach(element => {
            element.style.display = 'none';
        })
        const btn = document.getElementById(`btnPart${i}`);
        if(btn.classList.contains("btn-background")){
            btn.classList.remove("btn-background")
        }
    }
}

const title = document.getElementById("title");
switch (currentPartCurrent){
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

function nextPart(nextPart){
    
    const title = document.getElementById("title");
    let currentPart = JSON.parse(localStorage.getItem('currentPartRegisterProject'));
    if(!currentPart) {
        localStorage.setItem('currentPartRegisterProject', JSON.stringify(1))
        currentPart = 1;
    }
    console.log(nextPart, currentPart)

    if(nextPart === currentPart + 1 || nextPart < currentPart){
        const elements = document.querySelectorAll(`.part${nextPart}`);
        elements.forEach(element => {
            element.style.display = 'block';

            if(element.classList.contains("divBtnsForm") || element.classList.contains("d-flex")) {
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