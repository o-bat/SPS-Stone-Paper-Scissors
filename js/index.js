
var PS = 0
var CS = 0
var PNumber = 0
var CNumber = 0

function setStone() {
    document.getElementById('P-Selected-Image').src = 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/77/000000/external-stone-nature-resource-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png'
    document.getElementById('C-Selected-Image').src = 'img/SPS.gif'
    setTimeout(function () {
        setComputer()
        Score()
        Control()
        setTimeout(function () {
            Reset()
        }, 770);
    }, 2000);

}

function setPaper() {
    document.getElementById('P-Selected-Image').src = 'https://img.icons8.com/color/77/000000/paper.png'
    document.getElementById('C-Selected-Image').src = 'img/SPS.gif'
    setTimeout(function () {
        setComputer()
        Score()
        Control()
        setTimeout(function () {
            Reset()
        }, 770);
    }, 2000);

}

function setScissors() {
    document.getElementById('P-Selected-Image').src = 'https://img.icons8.com/color/77/000000/scissors.png'
    document.getElementById('C-Selected-Image').src = 'img/SPS.gif'
    setTimeout(function () {
        setComputer()
        Score()
        Control()
        setTimeout(function () {
            Reset()
        }, 770);
    }, 2000);
}


function setComputer() {
    while (true) {
        var image = Math.floor(Math.random() * 10 / 3)
        if (image == 1) {

        } else {
            break;
        }
    }
    switch (image) {
        case 0:
            document.getElementById('C-Selected-Image').src='https://img.icons8.com/color/77/000000/paper.png'
            console.log('0')
            break;
        case 2:
            document.getElementById('C-Selected-Image').src='https://img.icons8.com/color/77/000000/scissors.png'
            console.log('2')
            break;
        case 3:
            document.getElementById('C-Selected-Image').src='https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/77/000000/external-stone-nature-resource-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png'
            console.log('3')
            break;

        default:
            break;
    }
}

function Score() {
    if (document.getElementById('P-Selected-Image').src == 'https://img.icons8.com/color/77/000000/scissors.png'
        && document.getElementById('C-Selected-Image').src == 'https://img.icons8.com/color/77/000000/scissors.png'
        || document.getElementById('P-Selected-Image').src == 'https://img.icons8.com/color/77/000000/paper.png'
        && document.getElementById('C-Selected-Image').src == 'https://img.icons8.com/color/77/000000/paper.png'
        || document.getElementById('P-Selected-Image').src == 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/77/000000/external-stone-nature-resource-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png'
        && document.getElementById('C-Selected-Image').src == 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/77/000000/external-stone-nature-resource-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png'
    ) {
        document.getElementById('Score-text').innerHTML = 'scoreless!'

    }
    else if (document.getElementById('P-Selected-Image').src == 'https://img.icons8.com/color/77/000000/scissors.png'
        && document.getElementById('C-Selected-Image').src == 'https://img.icons8.com/color/77/000000/paper.png'
        || document.getElementById('P-Selected-Image').src == 'https://img.icons8.com/color/77/000000/paper.png'
        && document.getElementById('C-Selected-Image').src == 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/77/000000/external-stone-nature-resource-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png'
        || document.getElementById('P-Selected-Image').src == 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/77/000000/external-stone-nature-resource-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png'
        && document.getElementById('C-Selected-Image').src == 'https://img.icons8.com/color/77/000000/scissors.png'
    ) {
        document.getElementById('Score-text').innerHTML = 'Player win!'
        CNumber++
        document.getElementById(`C-h${CNumber}`).src='img/brokenHeart.png';

    }
    else if (document.getElementById('P-Selected-Image').src == 'https://img.icons8.com/color/77/000000/scissors.png'
        && document.getElementById('C-Selected-Image').src == 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/77/000000/external-stone-nature-resource-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png'
        || document.getElementById('P-Selected-Image').src == 'https://img.icons8.com/color/77/000000/paper.png'
        && document.getElementById('C-Selected-Image').src == 'https://img.icons8.com/color/77/000000/scissors.png'
        || document.getElementById('P-Selected-Image').src == 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/77/000000/external-stone-nature-resource-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png'
        && document.getElementById('C-Selected-Image').src == 'https://img.icons8.com/color/77/000000/paper.png'
    ) {
        document.getElementById('Score-text').innerHTML = 'Coumputer win!'
        PNumber++
        document.getElementById(`P-h${PNumber}`).src='img/brokenHeart.png';

    }
}

function Reset() {
    document.getElementById('P-Selected-Image').src = ''
    document.getElementById('C-Selected-Image').src = ''
}

function Control(params) {
    if (PNumber==3) {
        console.log('P over')
        window.location.href = "/GameOver.html";
    }

    else if (CNumber==3) {
        console.log('C over')
        window.location.href = "/YouWin.html";
    }
}
