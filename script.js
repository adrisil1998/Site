// Espera o carregamento completo da página
window.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona o botão e a div onde as opções aparecerão
    const botao = document.getElementById('botao');
    const opcoesContainer = document.getElementById('opcoes');

    // Adiciona um evento de clique ao botão
    botao.addEventListener('click', function () {
      // Define as opções que serão exibidas dentro da div
      const opcoesHTML = `
        <p>Escolha uma das opções abaixo:</p>
        <button onclick="alert('Você escolheu a Opção 1')">Opção 1</button>
        <button onclick="alert('Você escolheu a Opção 2')">Opção 2</button>
        <button onclick="alert('Você escolheu a Opção 3')">Opção 3</button>
      `;

      // Insere as opções dentro da div
      opcoesContainer.innerHTML = opcoesHTML;

      // Torna a div visível
      opcoesContainer.style.display = 'block';

      // Esconde o botão
      botao.style.display = 'none';
    });
});
