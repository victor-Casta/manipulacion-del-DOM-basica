const h1 = document.querySelector('h1');
const input_1 = document.querySelector('#calculo_1');
const input_2 = document.querySelector('#calculo_2');
const btn = document.querySelector('btncalcular');
const pResult = document.querySelector('#resultado');

btn.addEventListener('click', buttonOnClick);

function buttonOnClick() {
    const sumaInputs = Number(input_1.value) + Number(input_2.value);
    pResult.innerText = "El resultado es: " + sumaInputs;
}


                                                                                              