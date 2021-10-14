const Modal =
{
    open() {
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close() {
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const Storage =
{
    set(transactions)
    {
        localStorage.setItem("dev.finances:transactions", JSON.stringify(transactions))
    },

    get()
    {
        return JSON.parse(localStorage.getItem("dev.finances:transactions")) || []
    }
}

const transactions =
[
    {
        description: 'Luz',
        amount: -50000,
        date: '22/07/2021',
    },
    {
        description: 'Website',
        amount: 500000,
        date: '22/07/2021',
    },
    {
        description: 'Internet',
        amount: -20000,
        date: '22/07/2021',
    },
]

//somar todas as entradas... somar todas as saídas...
//subtrair do valor total de entradas o valor total de saídas .: balanço
const Transaction =
{
    all: Storage.get(),

    add(transaction) {
        Transaction.all.push(transaction)
        App.reload()
    },

    remove(index)
    {
        Transaction.all.splice(index, 1)
        App.reload()
    },

    incomes() {
        let income = 0
        //transactions.forEach
        Transaction.all.forEach
            (
                transaction => {
                    if (transaction.amount > 0) {
                        income += transaction.amount;
                    }
                }
            )
        return income
    },

    expenses() {
        let expense = 0
        //transactions.forEach
        Transaction.all.forEach
            (
                transaction => {
                    if (transaction.amount < 0) {
                        expense += transaction.amount;
                    }
                }
            )
        return expense
    },

    total() {
        return Transaction.incomes() + Transaction.expenses()
        // (+)expenses + -incomes
    }
}

//substitui dados html com dados javascript
const DOM =
{
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        tr.dataset.index = index

        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction, index) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html =
        `
        <tr>
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover transação">
            </td>
        </tr>
        `

        return html
    },

    updateBalance() {
        document
            .getElementById('incomeDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.incomes())
        document
            .getElementById('expenseDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.expenses())
        document
            .getElementById('totalDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.total())
    },

    clearTransactions()
    {
        DOM.transactionsContainer.innerHTML = ""
    }
}

const Utils =
{
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")
        value = Number(value) / 100
        value = value.toLocaleString
            (
                "pt-BR",
                {
                    style: "currency",
                    currency: "BRL"
                }
            )

        return signal + value
    },

    formatAmount(value)
    {
        value *= 100

        return Math.round(value)
    },

    formatDate(date)
    {
        const splittedDate = date.split("-")
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
    }
}

const Form =
{
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    getValues()
    {
        return{
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value
        }
    },

    validateFields()
    {
        const {description, amount, date} = Form.getValues()
        if (description.trim() == "" || amount.trim() == "" || date.trim() == "")
        {
            throw new Error("Por favor, preencha todos os campos")
        }
    },

    formatValues()
    {
        let{description, amount, date} = Form.getValues()
        amount = Utils.formatAmount(amount)
        date = Utils.formatDate(date)
        return{
            description,
            amount,
            date
        }
    },

    clearFields()
    {
        Form.description.value = ""
        Form.amount.value = ""
        Form.date.value = ""
    },

    submit(event)
    {
        event.preventDefault()

        try
        {
            Form.validateFields()
            const transaction = Form.formatValues()
            //salva:
            Transaction.add(transaction)
            Form.clearFields()
            Modal.close()
            App.reload()
        }
        catch (error)
        {
            alert(error.message)
        }
    }
}

const App =
{
    init() {
        Transaction.all.forEach(DOM.addTransaction)
        DOM.updateBalance()
        Storage.set(Transaction.all)
    },

    reload()
    {
        DOM.clearTransactions()
        App.init()
    }
}

App.init()