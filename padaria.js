// Aqui adicionamos um evento de escutar o click do mause sobre o ícone de Hamburguer.
hamburguerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex")
    // Criamos uma função que a ouvir o click do mouse, ele adicione uma class, que está fazendo nossa caixa (div) aparecer, ou seja, ficar visivel.

});

//Criamos uma função que a ouvir o click do Mouse, ele REMOVA uma Class, que está fazendo nossa caixa (Div) desaparecer, ou seja, ficar invisível.
closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
});