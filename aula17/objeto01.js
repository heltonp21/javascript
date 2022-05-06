let amigo = {nome: 'Helton',
sexo: 'M',
peso: 62.3,
engordar(p=0) {
    console.log('Engordou')
    this.peso += p

}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)