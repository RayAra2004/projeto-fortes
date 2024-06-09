document.getElementById("formLogin").addEventListener("submit", function(e){
    e.preventDefault();
    if(e.target[0].value === "Donatario01" && e.target[1].value === "dona123"){
        window.location.href = "./pages/instituicao/index.html";
    } else if(e.target[0].value === "Administrador" && e.target[1].value === "adm123"){
        window.location.href = "./pages/fortes/index.html";
    } 
});

document.getElementById("signUp").addEventListener("click", function(e){
    window.location = "./pages/cadastro.html";
});