document.addEventListener("DOMContentLoaded", function() {

    const converterButton = document.querySelector('.converter-button');

    converterButton.addEventListener('click', function() {

        const pesoInput = document.querySelector('input[type="number"]');
        const resultadoParagrafo = document.querySelector('.converted-value');

        const peso = parseFloat(pesoInput.value);

        if (!isNaN(peso)) {
            // Calcula a quantidade de água recomendada em litros (30ml/kg convertidos para litros)
            const quantidadeAguaLitros = peso * 30 / 1000; // Convertendo ml para litros (1000ml = 1L)
            
            resultadoParagrafo.textContent = `Você deve beber ${quantidadeAguaLitros.toFixed(2)} litros de água por dia.`; // Arredondamento para 2 casas decimais
        } else {
            resultadoParagrafo.textContent = 'Por favor, insira um valor válido para o peso.';
        }
    });
});