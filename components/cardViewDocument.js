function cardViewDocument(id){
    const element = document.getElementById(id);
    element.innerHTML += `
        <div class="cardViewDocument">
            <h5>Nome do Projeto</h5>
            <div>
                <button class="btn">VISUALIZAR</button>
                <button class="btn">BAIXAR</button>
            </div>
        </div>
    `;
}