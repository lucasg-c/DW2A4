import { updateMasks } from "./modules/masks.js";
import { searchCepData } from "./modules/searchdata.js";

updateMasks();

const buttonVerificarCep = document.getElementById('buttonCep');
buttonVerificarCep.addEventListener
(
    'click',
    function(e)
    {
        e.preventDefault();
        searchCepData();
    }
)