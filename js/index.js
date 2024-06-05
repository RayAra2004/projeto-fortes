document.getElementById("formLogin").addEventListener("submit", function(e){
    e.preventDefault();
    if(e.target[0].value === "ong@gmail.com" && e.target[1].value === "ong123"){
        window.location.href = "./pages/instituicao/index.html";
    } else if(e.target[0].value === "adm@gmail.com" && e.target[1].value === "adm123"){
        window.location.href = "./pages/fortes/index.html";
    } 
});

document.getElementById("signUp").addEventListener("click", function(e){
    window.location = "./../pages/cadastro.html";
});