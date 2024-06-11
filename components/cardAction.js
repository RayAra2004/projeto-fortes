function cardAction(id){
    const element = document.getElementById(id);
    element.innerHTML += `
        <div class="cardAction">
            <h4>Nome da ação realizada</h4>
            <button class="btn">VER DETALHES</button>
        </div>
    `;
}