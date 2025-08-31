// filepath: c:\Users\andra\OneDrive\Documents\Modelos Personalizados do Office\Projeto ftsa\index.html
    window.addEventListener('DOMContentLoaded', function() {
        const inner = document.getElementById('rolante-inner');
        const palavra = inner.children[0].outerHTML;
        let larguraContainer = inner.parentElement.offsetWidth;
        let larguraPalavra = inner.children[0].offsetWidth + 32; // 2rem = 32px de margem
        let repeticoes = Math.ceil((larguraContainer * 2.2) / larguraPalavra); // 2.2 para garantir sobra

        inner.innerHTML = '';
        for(let i=0; i<repeticoes; i++) {
            inner.innerHTML += palavra;
        }
        // Ajusta a animação para cobrir metade do conteúdo (loop perfeito)
        inner.style.animationDuration = Math.max(10, repeticoes * 1.5) + 's';
        inner.style.minWidth = (larguraPalavra * repeticoes) + 'px';
        // Garante que o container pai não vaze
        inner.parentElement.style.overflowX = 'hidden';
    });