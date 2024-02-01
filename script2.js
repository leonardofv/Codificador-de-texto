let inputTexto = document.getElementById('texto');
let criptografar = document.getElementById('botaoCriptografar');
let descriptografar = document.getElementById('botaoDescriptografar');

criptografar.addEventListener("click", function() {

    let mensagem = inputTexto.value;
    
    let mensagemCriptografada = mensagem.replace(/e/g, 'enter')
                                            .replace(/i/gi, 'imes')
                                            .replace(/a/gi, 'ai')
                                            .replace(/o/gi, 'ober')
                                            .replace(/u/gi, 'ufat');

    inputTexto.value = mensagemCriptografada;
    
});

descriptografar.addEventListener("click", function() {
    
    let mensagem = inputTexto.value;

    let mensagemOriginal = mensagem.replace(/enter/gi, 'e')
                                .replace(/imes/gi, 'i')
                                .replace(/ai/gi, 'a')                                                                            
                                .replace(/ober/gi, 'o')
                                .replace(/ufat/gi, 'u');

    inputTexto.value = mensagemOriginal;
   
});

