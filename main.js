// объкт с курсами валют
const rates = {};
// эл для отображения курсов валют
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
//эл формы, ввод суммы, выбор валют поля с рез-ом
const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#select');

// функц получения курсов валют и отображение их на стр
const getCurrencies = async () => {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;
    rates.USD = result.Valute.USD;
    rates.EUR = result.Valute.EUR;

    elementUSD.textContent = rates.USD.Value.toFixed(2);
    elementEUR.textContent = rates.EUR.Value.toFixed(2);

    if (rates.USD.Value < rates.USD.Previous) {
        elementUSD.classList.add('bottom');
    } else {
        elementUSD.EURclassList.add('top');
    }

    if (rates.EUR.Value < rates.EUR.Previous) {
        elementEUR.classList.add('bottom');
    } else {
        elementEUR.classList.add('top');
    }

};

getCurrencies();
// функц конвертации
const convertValue = () => {
    result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(2);
};
//слушаем измение в тексовом поле и в селект
input.oninput = convertValue;
select.oninput = convertValue;