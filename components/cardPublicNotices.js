function cardPublicNotices(id) {
    const element = document.getElementById(id);
    element.innerHTML += `
        <div class="cardPublicNotice">
            <h4>Edital aberto em: 21/05/2024</h4>
            <button class="btn">Ver detalhes</button>
        </div>
    `;
}