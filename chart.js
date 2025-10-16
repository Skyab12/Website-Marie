const ctx = document.getElementById('enqueteChart').getContext('2d');
const enqueteChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Vraag 1', 'Vraag 2', 'Vraag 3'],
        datasets: [{
            label: 'Aantal antwoorden',
            data: [12, 19, 7],
            backgroundColor: ['#4e79a7','#f28e2b','#e15759']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true }
        }
    }
});
