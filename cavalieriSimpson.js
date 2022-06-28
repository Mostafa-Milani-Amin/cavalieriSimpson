function cavalieriSimpson(n, a, b) {
    if (n == null || n < 1) n = 1000
    let dx = (b - a) / (2 * n);
    let n1 = 2 * n - 1;
    let n2 = n1 - 1;
    let nt = 0;
    let st = 0;
    for (i = 1; i <= n1; i += 2) {
        x = a + i * dx;
        st += f(x);
    }
    nt = st * 4
    st = 0
    for (i = 2; i <= n2; i += 2) {
        x = a + i * dx;
        st += f(x);
    }
    nt += 2 * st + f(a) + f(b)
    return nt * dx / 3
}
let f = x => ... /* Inserisci la funzione 'f' della quale vuoi calcolare l'integrale definito nell'intervallo specificato con gli argomenti 'a' e 'b' della funzione 'cavalieriSimpson' */