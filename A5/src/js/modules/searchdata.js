const state = document.getElementById('state');
const cases = document.getElementById('cases');
const suspects = document.getElementById('suspects');
const deaths = document.getElementById('deaths');
const date = document.getElementById('date');

function clearFields()
{
    state.innerHTML = "";
    cases.innerHTML = "";
    suspects.innerHTML = "";
    deaths.innerHTML = "";
    date.innerHTML = "";
}

function searchCovidStateData(uf)
{
    fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`)
        .then((response) => { return response.json(); })
        .then
        (
            (data) =>
            {
                cases.innerHTML = data.cases;
                suspects.innerHTML = data.suspects;
                deaths.innerHTML = data.deaths;
                date.innerHTML = new Date(Date.parse(data.datetime)).toLocaleString();
            }
        )
}

export function searchCepData()
{
    clearFields();
    state.innerHTML = "..."

    var cep = document.getElementById('cep').value.replace("-", "");

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then
        (
            (data) =>
            {
                state.innerHTML = data.uf;

                cases.innerHTML = "..."
                suspects.innerHTML = "..."
                deaths.innerHTML = "..."
                date.innerHTML = "..."

                searchCovidStateData(data.uf);
            }
        )
}
