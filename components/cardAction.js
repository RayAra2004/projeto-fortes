function cardAction(id, link){
    const element = document.getElementById(id);
    element.innerHTML += `
        <div class="cardAction">
            <h4>Nome da ação realizada</h4>
            <a href="${link}">
                <button class="btn">VER DETALHES</button>
            </a>
        </div>
    `;
}