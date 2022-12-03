function operacao(){

    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    
    var resultado = a + b
    
    document.getElementById("resultado").innerHTML = "Resultado:" + resultado;
    
    }