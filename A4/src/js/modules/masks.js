const Masks =
{
    name (value)
    {
        console.log(value)
        return value
            .replace(/[^A-Za-z\s]/g, '');
    },

    cpf (value)
    {
        console.log(value)
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    },

    date (value)
    {
        console.log(value)
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{4})\d+?$/, '$1');
    },
    
    email (value)
    {
        console.log(value)
        return value
            .replace(/\s/g, '');
    },
    
    phone (value)
    {
        console.log(value)
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/,'$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1');
    },
    
    cep (value)
    {
        console.log(value)
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/,'$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1');
    }
}

export function generalMask()
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
                (e) => 
                {
                    e.target.value = Masks[Field](e.target.value);
                }, 
                false
            )
        }
    )
}