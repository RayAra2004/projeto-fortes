function cardVisitProject(id){
    const element = document.getElementById(id);
    element.innerHTML += `
        <div class="cardVisitProject">
            <img src="./../../imgs/png/acaoSocial.png" alt="Logo da instiuição">
            <h3>Mãos Solidárias</h3>
            <div>
                <h5>Projeto necessário de visita em: 20/08/2024</h5>
            </div>
        </div>
    `;
}