let valores = [5, 8, 7, 4, 9, 3]

/*for (let pos = 0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}