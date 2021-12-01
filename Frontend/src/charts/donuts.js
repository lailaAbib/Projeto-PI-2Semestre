


var receitas = document.getElementById('chartReceitas').getContext('2d');
var chart = new Chart(receitas, {
    type: 'line',
    data: {
        labels: ["Out/20", "Nov/20", "Dez/20", "Jan/21", "Fev/21", "Mai/21", "Jun/21", "Jul/21", "Ago/21","Set/21", "Out/21", "Nov/21"],
        datasets: [
            {
                label: "Valor contas de água",
                backgroundColor: '#fff',
                borderColor: '#38d6eb',
                data: [307.5, 266.5, 246, 328, 276.75, 317.75, 594.5, 294.25, 287, 194.75, 123,51.25],
            }
        ]
    }
});
