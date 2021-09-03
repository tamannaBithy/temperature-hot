// spinner
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}

const searchTemp = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear
    searchField.value = '';

    // spinner
    toggleSpinner('block');


    const key = '1d08945527b1deba1374e628d42dfa08'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${key}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayTemp(data)
    }
    catch (error) {
        console.log(error);
    }
}


// function innerText(input) {
//     const text = document.getElementById(input)
//     const innerText = text.innerText;
//     return innerText;
// }
// this function is not working inside the display function

const displayTemp = data => {
    console.log(data)

    // error handle
    if (data.cod == 404) {
        console.log('hello');
        toggleSpinner('none');
        alert('city not found!!')
    }

    // destructuring
    const { name, main, weather } = data;
    const { temp_max, temp_min } = main;
    const { description, icon } = weather[0];

    // for showing data
    document.getElementById('location').innerText = name;
    document.getElementById('high-temp').innerText = (temp_max - 273.15).toFixed(2);
    document.getElementById('low-temp').innerText = (temp_min - 273.15).toFixed(2);
    document.getElementById('weather').innerText = description;

    // for changing icon dynamically
    const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const imgIcon = document.getElementById('icon');
    imgIcon.setAttribute('src', url);


    toggleSpinner('none');

}