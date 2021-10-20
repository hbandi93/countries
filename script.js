async function _load() {
    const rootElement = document.getElementById("root");
    const res = await fetch("https://restcountries.com/v3.1/name/peru");
    const peru = await res.json();

    const peruO = peru[0];

    let landlockText = "";


    if (peruO.landlocked = true) {
        landlockText = "I've never met the sea.";
    }
    else {
        landlockText = "I can go fishing for sea creatures here.";
    }



    const peruHTML = `
        <section class="independent">
            <img src="${peruO.flags.png}" alt="flag">
            <h1><b>Official name:</b> ${peruO.name.official}</h1>
            <h2><b>Capital:</b> ${peruO.capital[0]}</h2>
            <ul>Languages:
                <li>${peruO.languages.aym}</li>
                <li>${peruO.languages.que}</li>
                <li>${peruO.languages.spa}</li>
            </ul>
            <h5 id="landlock">${landlockText}</h5>
            <!--<h5> Ha landlocked = true I've never met the sea.</h5>-->
        </section>
    `;



    console.log(rootElement);

    rootElement.insertAdjacentHTML("beforeend", peruHTML);

}
window.addEventListener("load", _load);