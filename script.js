const url = 'https://api.kanye.rest/';
const quotesContainer = document.getElementById('quotes-container');
const adviceId = document.getElementById('advice-id');
let advNo = 2;
function fetchData() {
    fetch(url).then(response => response.json()).then(data => {
        adviceId.innerText = `ADVICE#${advNo}`
        quotesContainer.innerHTML = ` <p id="quotes-text">" ${data.quote} "</p>`;
        advNo += 1;
    }).catch(err => {
        console.log(err);
        quotesContainer.innerHTML=`<p> Sorry! There is some error</p><p>plese check your internet connection</p>`
    })
}
