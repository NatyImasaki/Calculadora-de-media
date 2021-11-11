function calcularMedia() {
    var nome =(document.getElementById('nomeAluno').value);
    var notaPrimeiroBimestre = parseFloat(document.getElementById('nota1').value);
    var notaSegundoBimestre = parseFloat(document.getElementById('nota2').value);
    var notaTerceiroBimestre = parseFloat(document.getElementById('nota3').value);
    var notaQuartoBimestre = parseFloat(document.getElementById('nota4').value);
    var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;
    var notaFinalFixada = notaFinal.toFixed(1);

    if (notaFinalFixada >=6 ) {
        var mediaAprovada = document.getElementById('resultado')
        var msgAprovado = "Parabéns, " + nome + "! Sua média final é de: " + notaFinalFixada + ", você foi aprovado!"
        mediaAprovada.innerHTML = msgAprovado} else {

            var mediaReprovada = document.getElementById('resultado')
            var msgReprovado = "Não foi dessa vez, " + nome + ". Sua média final é de: " + notaFinalFixada + ", você foi reprovado!"
            mediaReprovada.innerHTML = msgReprovado   
        }
        
    }
    //Forma resumida de realizar if e else (juntando document.getElementById com .innerHTML)
    //if (media >= 7){
        //var mediaAprovado = ("Parabéns, " + nome + "! Sua média foi de " + media + ", você foi aprovado!");
        //document.getElementById('resultado').innerHTML = mediaAprovado;
      //}else{
       // var mediaReprovado = (nome + ", Sua média foi de " + media + ". Infelizmente, você foi reprovado.");
       // document.getElementById('resultado').innerHTML = mediaReprovado;
