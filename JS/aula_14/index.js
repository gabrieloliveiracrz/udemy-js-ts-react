let num = Number(window.prompt('Digite um número:'));
document.getElementsByClassName('numero')[0].innerHTML = num;
document.getElementsByClassName('numero')[1].innerHTML = num;
document.getElementById('num-int').innerText = Number.isInteger(num);
document.getElementById('num-undefined').innerText = Number.isNaN(num);
document.getElementById('num-ceil').innerText = Math.ceil(num);
document.getElementById('num-ceil').innerText = Math.floor(num);
