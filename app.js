const searchTemp = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
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
    // console.log(data)
    // destructuring
    const { name, main, weather } = data;
    const { temp_max, temp_min } = main;
    // const { main } = weather[0];
    const status = weather[0].main;
    console.log(status)

    document.getElementById('location').innerText = name;
    document.getElementById('high-temp').innerText = (temp_max - 273.15).toFixed(2);
    document.getElementById('low-temp').innerText = (temp_min - 273.15).toFixed(2);
    document.getElementById('weather').innerText = status;


    // condition & changing the icon
    const atmosphere = document.getElementById('weather').innerText;

    if (atmosphere == 'Clouds') {
        document.getElementById('image').remove();
        const weatherStatus = document.getElementById('status')
        weatherStatus.innerHTML =
            `<i class="fas fa-cloud-sun icon" style="font-size: 4rem"></i>`
    }

}