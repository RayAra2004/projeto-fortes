function header(page){
    const header = document.getElementsByTagName("header")[0];

    switch(page){
        case 'instituicao':
    
            header.innerHTML = `
                <img onclick="navigateIndex()" id="logo" src="./../../imgs/png/logo.png" alt="Logo com mãos dadas em forma de coração e escrita a palavra Fortes abaixo">
                <div class="container-nav" id="container-nav">
                    <nav>
                        <a href="editaisAbertos.html">EDITAIS ABERTOS</a>
                        <a href="acompanharProjetos.html">ACOMPANHAR PROJETOS</a>
                        <a href="meuPerfil.html">MEU PERFIL</a>
                        <a href="ajuda.html">AJUDA</a>
                        <a href="./../../">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" 
                                width="24px" fill="#e8eaed">
                                <path 
                                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
                            </svg>
                            SAIR
                        </a>
                    </nav>
                </div>
                <div id="container-menu" class="mobile" onclick="menu()">
                    <img src="./../../imgs/svg/menu.svg" />
                </div>
            `;
            break;
        
        case 'fortes':
            header.innerHTML = `
                <img onclick="navigateIndex()" id="logo" src="./../../imgs/png/logo.png" alt="Logo com mãos dadas em forma de coração e escrita a palavra Fortes abaixo">
                <div class="container-nav" id="container-nav">
                    <nav>
                        <a href="lancarEdital.html">LANÇAR EDITAL</a>
                        <a href="projetosAprovar.html">PROJETOS À APROVAR</a>
                        <a href="projetosAndamento.html">PROJETOS EM ANDAMENTO</a>
                        <a href="projetosConcluidos.html">PROJETOS CONCLUÍDOS</a>
                        <a href="verRelatorios.html">VER RELATÓRIOS</a>
                        <a href="./../../">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" 
                                width="24px" fill="#e8eaed">
                                <path 
                                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
                            </svg>
                            SAIR
                        </a>
                    </nav>
                </div>
                <div id="container-menu" class="mobile" onclick="menu()">
                    <img src="./../../imgs/svg/menu.svg" />
                </div>
            `;
            break;
        case "paginas":
            header.innerHTML = `
                <img onclick="navigateIndex()" id="logo" src="./../imgs/png/logo.png" alt="Logo com mãos dadas em forma de coração e escrita a palavra Fortes abaixo">
            `;
            break;
        default:
            header.innerHTML = `
                <img onclick="navigateIndex()" id="logo" src="./imgs/png/logo.png" alt="Logo com mãos dadas em forma de coração e escrita a palavra Fortes abaixo">
            `;
    }
}

function menu(){
    document.getElementById("container-nav").classList.toggle("show")
}

document.addEventListener('click', (event) => {
    const openMenu = document.getElementById("container-menu");
    const containerNav = document.getElementById("container-nav");

    if(!openMenu.contains(event.target) && !containerNav.contains(event.target))
    if(document.getElementById("container-nav").classList.contains("show")){
        document.getElementById("container-nav").classList.remove("show");
    }
});