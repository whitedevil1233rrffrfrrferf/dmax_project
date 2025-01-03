const labels = chartData.map(item => item.name);
const scores = chartData.map(item => item.score);

const ctx = document.getElementById('myChart');
const earning=document.getElementById('earning')
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Dmax Score',
      data: scores,
      backgroundColor: ['rgba(212, 253, 217, 0.8)',  // Light Blue
        'rgba(148, 223, 166, 0.8)',],
      borderColor: ['rgba(77, 168, 218, 1)',  
        'rgba(255, 140, 157, 1)', ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(earning, {
  type: 'doughnut',
  data: {
    labels: desig_name,
    datasets: [{
      label: '# of Votes',
      data: desig_Scores,
      backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});