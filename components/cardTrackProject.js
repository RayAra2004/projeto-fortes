function cardTrackProject(id) {
    const element = document.getElementById(id);
    element.innerHTML += `
        <div class="cardProject">
            <div class="nameProject">
                <h5>Nome do Projeto</h5>
                <h5>Nome do Edital</h5>
            </div>
            <div>
                <h5>Categoria do Projeto</h5>
            </div>
            <button class="btn">Ver detalhes</button>
        </div>
    `;
}