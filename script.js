async function _load() {
    const rootElement = document.getElementById("root");

    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();

    console.log(countries);

    for (const country of countries) {
        const countryHTML = `
        <section class="independent">
            <img src="${country.flags.png}" alt="flag">
            <h1><b>Official name:</b> ${country.name.official}</h1>
            <h2><b>Capital:</b> ${country.capital}</h2>
            <!--<h5> Ha landlocked = true I've never met the sea.</h5>-->
        </section>
        `;

        rootElement.insertAdjacentHTML("beforeend", countryHTML);
    }
    /*
        let landlockText = "";
    
    
        if (countries.landlocked = true) {
            landlockText = "I've never met the sea.";
        }
        else {
            landlockText = "I can go fishing for sea creatures here.";
        }
    
    
    
    
    
    
        console.log(rootElement);
    
        */

}
window.addEventListener("load", _load);