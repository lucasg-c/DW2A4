const Masks =
{
    cep (value)
    {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/,'$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1');
    }
}

export function updateMasks()
{
    document.querySelectorAll('input')
        .forEach
        (
            ($input) =>
            {
                const Field = $input.dataset.js;
                $input.addEventListener
                (
                    'input', 
                    (e) => { e.target.value = Masks[Field](e.target.value);}, 
                    false
                )
            }
        )
}