document.addEventListener('DOMContentLoaded', function() {
    // Ozone Level Chart
    const ctxOzone = document.getElementById('ozoneLevelChart').getContext('2d');
    const ozoneLevelChart = new Chart(ctxOzone, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Sum of Temperature_Avg',
                data: [3000, 3200, 3100, 2900, 2700, 2600, 2400, 2500, 2600, 2700, 2800, 2900],
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }, {
                label: 'Sum of Temperature_Max',
                data: [3400, 3500, 3300, 3100, 3000, 2900, 2700, 2800, 2900, 3000, 3100, 3200],
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false
            }, {
                label: 'Sum of Temperature_Min',
                data: [2800, 2900, 2700, 2500, 2300, 2200, 2000, 2100, 2200, 2300, 2400, 2500],
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    // Data for Ahmedabad
const ahmedabadData = {
    labels: ['Jul 23', 'Jul 30', 'Aug 6', 'Aug 13', 'Aug 20', 'Aug 27'],
    datasets: [{
        label: 'Median of CO in Ahmedabad',
        data: [28, 99, 100, 63, 23, 65],
        fill: false,
        borderColor: 'blue',
        tension: 0.1
    }]
};

// Data for Bengaluru
const bengaluruData = {
    labels: ['Jul 23', 'Jul 30', 'Aug 6', 'Aug 13', 'Aug 20', 'Aug 27'],
    datasets: [{
        label: 'Median of CO in Bengaluru',
        data: [37, 72, 53, 109, 37, 60],
        fill: false,
        borderColor: 'green',
        tension: 0.1
    }]
};

// Configuration for Ahmedabad chart
const configAhmedabad = {
    type: 'line',
    data: ahmedabadData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'CO Median Levels in Ahmedabad'
            }
        }
    },
};

// Configuration for Bengaluru chart
const configBengaluru = {
    type: 'line',
    data: bengaluruData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'CO Median Levels in Bengaluru'
            }
        }
    },
};

// Render both charts
window.onload = function() {
    const ctxAhmedabad = document.getElementById('chartAhmedabad').getContext('2d');
    const ctxBengaluru = document.getElementById('chartBengaluru').getContext('2d');

    new Chart(ctxAhmedabad, configAhmedabad);
    new Chart(ctxBengaluru, configBengaluru);
};


    // Polluted Cities Chart
    const ctxCities = document.getElementById('pollutedCitiesChart').getContext('2d');
    const pollutedCitiesChart = new Chart(ctxCities, {
        type: 'bar',
        data: {
            labels: ['Tamil Nadu', 'Gujarat', 'Karnataka', 'Maharashtra'],
            datasets: [{
                label: 'AVG of PM10',
                data: [50, 70, 40, 90],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: 'AVG of PM2.5',
                data: [60, 80, 50, 100],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // AQI Level Chart
    const ctxAQI = document.getElementById('aqiLevelChart').getContext('2d');
    
    

    const aqiLevelChart = new Chart(ctxAQI, {
        type: 'pie',
        data: {
            labels: ['Bhopal', 'Hyderabad', 'Ahmedabad', 'Bengaluru', 'Chennai', 'Delhi'],
            datasets: [{
                data: [10, 20, 30, 15, 25, 40],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });

    // PH Levels by Air Chart
    const ctxPH = document.getElementById('phLevelsChart').getContext('2d');
    const phLevelsChart = new Chart(ctxPH, {
        type: 'bar',
        data: {
            labels: ['2010', '2011', '2012', '2013', '2014'],
            datasets: [{
                label: 'Variance of pH',
                data: [5, 6, 7, 8, 9],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });// Placeholder for the heatmap with dummy data
    const heatmapDiv = document.getElementById('heatmap');
    
    // Generate a 5x5 grid of dummy data
    const dummyData = [
      ['low', 'medium', 'high', 'medium', 'low'],
      ['medium', 'high', 'medium', 'low', 'medium'],
      ['high', 'medium', 'low', 'medium', 'high'],
      ['low', 'medium', 'high', 'low', 'medium'],
      ['medium', 'low', 'medium', 'high', 'low']
    ];
    
    // Create heatmap cells and append them to the heatmap div
    dummyData.forEach(row => {
      row.forEach(value => {
        const cell = document.createElement('div');
        cell.className = `heatmap-cell ${value}`;
        heatmapDiv.appendChild(cell);
      });
    });
    
});
