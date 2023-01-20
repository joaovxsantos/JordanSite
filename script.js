//Peguei todos os elementos com a class 'card' e com a class 'p'
//Isso retorna um array com todos os elementos.
let card = document.querySelectorAll('.card')
let p = document.querySelectorAll('.p')

//Passei um forEach pra varrer o array card, todo vez que ele é varrido, o seu indice é
//colocado no array p, e assim muda a opacidade dele, ou seja
//pega o número do card que coloquei o mouse (0 por exemplo), passa pro array p (0) com isso
//só muda a opacidade quando eu passo o mouse em seu referente card
card.forEach(function (card, i) {
    card.addEventListener('mouseover', function () {
        p[i].style.opacity = '1'
    })
    card.addEventListener('mouseout', function () {
        p[i].style.opacity = '0'
    })
})
