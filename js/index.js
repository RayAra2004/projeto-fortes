document.getElementById("formLogin").addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e)
    if(e.target[0].value === "ong@gmail.com" && e.target[1].value === "adm123"){
        window.location.href = "./pages/instituicao/index.html"
    }
    
});

document.getElementById("signUp").addEventListener("click", function(e){
    window.location = "./../pages/cadastro.html"
});