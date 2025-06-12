function contar() {
    let inicio = document.querySelector('input#txtin')
    let fim = document.querySelector('input#txtfim')
    let passo = document.querySelector('input#txtpas')
    let res = document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Verifique seus dados e tente novamente!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Consideraremos PASSO 1.')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }

        }
        res.innerHTML += 'FIM.'
    }
    
}