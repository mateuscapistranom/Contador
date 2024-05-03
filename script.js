function contar() {
    let ini = document.getElementById('txti').value;
    let fim = document.getElementById('txtf').value;
    let passo = document.getElementById('txtp').value;
    let res = document.getElementById('res');

    if (ini.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert('[ERRO] FALTAM DADOS');
    } else {
        res.innerHTML = 'CONTANDO: <br>';

        let i = Number(ini);
        let f = Number(fim);
        let p = Number(passo);

        if (p <= 0) {
            window.alert('Passo Inválido! Considerando Passo 1');
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `;
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `\u{1F449} ${c} `;
            }
        }
        
        res.innerHTML += `\u{1F3C1}`;
    }
}
