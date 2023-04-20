const pizzas = [
    {
        sabor: 'Marguerita',
        tamanho: 'gigante',
        quantidade: 21
    },
    {
        sabor: 'Portuguesa',
        tamanho: 'média',
        quantidade: 12
    },
    {
        sabor: 'Amoda',
        tamanho: 'gigante',
        quantidade: 45
    },
    {
        sabor: '4 queijos',
        tamanho: 'pequena',
        quantidade: 9
    },
    {
        sabor: 'Carne seca',
        tamanho: 'gigante',
        quantidade: 15
    },
    {
        sabor: 'Chocolate',
        tamanho: 'média',
        quantidade: 20
    },
    {
        sabor: 'Frango c/ catupiry',
        tamanho: 'média',
        quantidade: 10
    },
    {
        sabor: 'Cogumelo com palmito',
        tamanho: 'gigante',
        quantidade: 30
    }
]


function search () {
    const valor = document.getElementById('input').value
    var p1 = document.getElementById('sabor')
    var p2 = document.getElementById('tamanho')
    var p3 = document.getElementById('quantidade')

    const findPizza = pizzas.find( pizza => pizza.sabor == valor)
    
    
    p1.innerText = findPizza.sabor
    p2.innerText = findPizza.tamanho
    p3.innerText = findPizza.quantidade

    console.log(findPizza)
}