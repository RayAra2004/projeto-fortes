function filters(){
    const element = document.getElementById("filters");
    element.innerHTML = `
        <div id="filter">
            <img src="./../../imgs/svg/filter.svg" alt="Filtro">
            <span>Filtrar</span>
        </div>
        <div id="search_bar">
            <input class="input_text" placeholder="Pesquisar" type="text">
            <img src="./../../imgs/svg/search.svg" alt="">
        </div>
    `
}