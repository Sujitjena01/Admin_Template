
document.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.getElementById("filterToggle");
    const formBox = document.getElementById("filterForm");

    // Start expanded
    formBox.classList.add("expanded");

    toggleBtn.addEventListener("click", function () {

        if (formBox.classList.contains("expanded")) {
            // Collapse
            formBox.classList.remove("expanded");
            formBox.classList.add("collapsed");
            toggleBtn.classList.add("collapsed");
        } else {
            // Expand
            formBox.classList.remove("collapsed");
            formBox.classList.add("expanded");
            toggleBtn.classList.remove("collapsed");
        }

    });

});

  
  
  document.addEventListener("DOMContentLoaded", function () {

    // Register plugin
    Chart.register(ChartDataLabels);

    // Default color palette (add more if needed)
    const colorPalette = [
      "#A3C038", // HR
      "#6A50C2", // ADMIN
      "#D6508F", // IT
      "#2AB7CA", // SAFETY (future example)
      "#d0581b", // CIVIL (future example)
    ];

    /**
     * Create a dynamic Pie Chart
     * id       = canvas id
     * labels   = array of labels -> ["HR", "ADMIN", "IT"]
     * values   = array of numbers -> [1500, 775, 370]
     */
    function createPieChart(id, labels, values) {
      new Chart(document.getElementById(id), {
        type: "pie",
        data: {
          labels: labels,
          datasets: [{
            data: values,
            backgroundColor: colorPalette.slice(0, values.length),
            borderWidth: 1
          }]
        },

        plugins: [ChartDataLabels],

        options: {
          plugins: {
            legend: { position: "bottom" },
            datalabels: {
              color: "#fff",
              font: { weight: "bold", size: 12 },
              formatter: (value, context) => {
                const total = context.chart._metasets[0].total;
                const percentage = ((value / total) * 100).toFixed(0);
                return `${value}\n(${percentage}%)`;
              }
            }
          }
        }
      });
    }

    // ------- Your real chart data (easy to expand later) ------- //

    createPieChart("chartRaised",
      ["HR", "ADMIN", "IT", "SAFETY", "CIVIL"],
      [1500, 775, 370, 200, 400]
    );

    createPieChart("chartSolved",
      ["HR", "ADMIN", "IT"],
      [475, 450, 745]
    );

    createPieChart("chartPending",
      ["HR", "ADMIN", "IT"],
      [400, 200, 150]
    );

    createPieChart("chartEscalated",
      ["HR", "ADMIN", "IT"],
      [730, 330, 130]
    );

  });  
  
  
  
 document.addEventListener("DOMContentLoaded", function () {

    Chart.register(ChartDataLabels);

    // Detect mobile: width < 576px (Bootstrap breakpoint)
    const isMobile = window.innerWidth < 576;

    const MOBILE_BAR_THICKNESS = 14;  // smaller bars
    const DESKTOP_BAR_THICKNESS = 26; // your default bars

    const barWidth = isMobile ? MOBILE_BAR_THICKNESS : DESKTOP_BAR_THICKNESS;

    const RAISED = "#066EAE";
    const SOLVED = "#0BB86D";
    const PENDING = "#CE911F";
    const ESCALATED = "#F05B5E";

    const ctx = document.getElementById("statusChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["HR CONNECT", "ADMIN CONNECT", "IT CONNECT"],
            datasets: [

                { label: "RAISED", data: [78, 52, 28], backgroundColor: RAISED },
                { label: "SOLVED", data: [50, 72, 65], backgroundColor: SOLVED },
                { label: "PENDING", data: [75, 50, 58], backgroundColor: PENDING },
                { label: "ESCALATED", data: [52, 62, 45], backgroundColor: ESCALATED }
            ]

         
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            scales: {
                x: {
                    grid: { display: false }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: "#ddd" },
                    ticks: { display: isMobile ? false : true}
                }
            },

            plugins: {
                legend: {
                    position: "top",
                    labels: { boxWidth: 18 }
                },
                datalabels: {
                    anchor: "top",
                    align: "top",
                    color: "#fff",
                    font: { size: isMobile ? 10 : 13, weight: "700" }
                }
            },

            barThickness: barWidth
        }
    });
});









// =============================
//  EMPLOYEE TOP COMPLAINTS CHART
// =============================

// Complete complaint list with dummy counts
const complaintsWithCounts = {
    "EMPLOYEE ENGAGEMENT": 12,
    "LEAVE MANAGEMENT": 80,"LEARNING MANAGEMENT": 90,
    "OFFICE MANAGEMENT": 45,
    "NDC, E-SEPARATION, RETIREMENT": 18,
    "POLICY & PROCESS DEPLOYMENT": 28,
    "AIR CONDITIONER": 60,
    "CAPABILITY & COMPETENCY DEVELOPMENT": 39,
    "REWARD & RECOGNITIONS": 52,
    "ATTENDANCE (PTL)": 40,
    "MISCELLANEOUS": 22,
    "COMPANY LEASED ACCOMODATION": 17,
    "APPLIANCES & REPAIRS": 19,
    "PERFORMANCE MANAGEMENT (PMS)": 48,
    "OFFICE & INFRA MANAGEMENT": 31,
    "DRINKING WATER": 15,
    "CAPABILITY DEVELOPMENT": 33,
    "BIOMETRIC & PERMIT TO LEAVE": 29,
    "ESS (CLAIMS & REIMBURSEMENTS)HOTELS AND TRANSPORT": 34,
    "MEDICLAIM": 26,
    "POLICY": 21,
    "PERFORMANCE MANAGEMENT (EPAR)": 30,
    "REPAIRS TO GATE": 11,
    "PENSION": 9,
    "EMPLOYEE FACILITY MANAGEMENT": 40,
    "COMPANY LEASE AGREEMENT (CTC)": 13,
    "FACILITIES FOR EMPLOYEE MANAGEMENT": 20,
    "CAREER MANAGEMENT": 36
};

// Generate consistent color based on string
function stringToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
        color += ("00" + ((hash >> (i * 8)) & 0xff).toString(16)).slice(-2);
    }
    return color;
}

// Sort complaints descending and take top 5
const sortedComplaints = Object.entries(complaintsWithCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

const labels = sortedComplaints.map(item => item[0]);
const dataValues = sortedComplaints.map(item => item[1]);
const colors = labels.map(label => stringToColor(label));

// Render Chart
const ctx = document.getElementById("topComplaintsChart").getContext("2d");
new Chart(ctx, {
    type: "bar",
    data: {
        labels: labels,
        datasets: [
            {
                data: dataValues,
                backgroundColor: colors,
                borderWidth: 0,
                borderRadius: 0
            }
        ]
    },

    options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                position: "top",
                labels: {
                    usePointStyle: true,
                    pointStyle: "rectRounded",
                    boxWidth: 18,
                    padding: 15,
                    font: { size: 12, weight: "500" },
                    generateLabels(chart) {
                        return labels.map((label, index) => ({
                            text: label,
                            fillStyle: colors[index],
                            strokeStyle: colors[index],
                            pointStyle: "rectRounded"
                        }));
                    }
                }
            },

            datalabels: {
                anchor: "center",
                align: "center",
                color: "#fff",
                font: { weight: "bold", size: 12 },
                formatter: value => value
            }
        },

        scales: {
            y: {
                ticks: { display: false },
                grid: { display: false }
            },
            x: {
                grid: { display: true }
            }
        }
    },

    plugins: [ChartDataLabels]
});
// =============================
//  END OF EMPLOYEE TOP COMPLAINTS CHART
// =============================






document.addEventListener("DOMContentLoaded", function () {

    Chart.register(ChartDataLabels);

    // Flexible - add any category and color
    const COLORS = {
        "ISSUE RAISED": "#066EAE",
        "ISSUE SOLVED": "#0BB86D",
        "ISSUE PENDING": "#CE911F",
        "ISSUE ESCALATED": "#F05B5E"
    };

    // Your sample complaint data
    const complaints = [
        {
            name: "Sujit Kumar",
            data: {
                "ISSUE RAISED": 60,
                "ISSUE SOLVED": 24,
                "ISSUE PENDING": 16,
                "ISSUE ESCALATED": 20
            }
        },
        {
            name: "Dibyanshu",
            data: {
                "ISSUE RAISED": 37,
                "ISSUE SOLVED": 10,
                "ISSUE PENDING": 15,
                "ISSUE ESCALATED": 20
            }
        },
        {
            name: "Ram Charan",
            data: {
                "ISSUE RAISED": 40,
                "ISSUE SOLVED": 25,
                "ISSUE PENDING": 13,
                "ISSUE ESCALATED": 12
            }
        },
        {
            name: "Salman Khan",
            data: {
                "ISSUE RAISED": 36,
                "ISSUE SOLVED": 11,
                "ISSUE PENDING": 13,
                "ISSUE ESCALATED": 22
            }
        },
        {
            name: "Rajpal Yadav",
            data: {
                "ISSUE RAISED": 54,
                "ISSUE SOLVED": 10,
                "ISSUE PENDING": 27,
                "ISSUE ESCALATED": 17
            }
        }
    ];

    // Dynamic category list
    const categories = Object.keys(COLORS);

    // Labels (names)
    const labels = complaints.map(item => item.name);

    // Build datasets dynamically
    const datasets = categories.map(category => ({
        label: category,
        data: complaints.map(item => item.data[category] || 0),
        backgroundColor: COLORS[category],
        borderRadius: 0,
        borderSkipped: false
    }));

    const ctx = document.getElementById("employeeComplaintsChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: datasets
        },
        plugins: [ChartDataLabels],
        options: {
            indexAxis: "y",
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    grid: { color: "#ddd" }
                },
                y: {
                    stacked: true,
                    grid: { display: false },
                    ticks: {
                        font: { size: 14, weight: "600" }
                    }
                }
            },

            plugins: {
                legend: {
                    position: "top",
                    labels: {
                        usePointStyle: true,
                        pointStyle: "rectRounded",
                        boxWidth: 18,
                        padding: 15,
                        font: { size: 12, weight: "500" }
                    }
                },

                datalabels: {
                    color: "#fff",
                    font: { size: 12, weight: "700" },
                    anchor: "center",
                    align: "center",
                    formatter: value => value > 0 ? value : ""
                }
            }
        }
    });
});




// Month wise trend chart  
(function() {
            // Wrap in IIFE to avoid global conflicts
            
            // Wait for DOM to be fully loaded
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initComplaintChart);
            } else {
                initComplaintChart();
            }

            function initComplaintChart() {
                const canvas = document.getElementById('complaintChart');
                
                if (!canvas) {
                    console.error('Canvas element not found');
                    return;
                }

                // Destroy existing chart instance if it exists
                const existingChart = Chart.getChart(canvas);
                if (existingChart) {
                    existingChart.destroy();
                }

                const ctx = canvas.getContext('2d');

                const data = {
                    labels: [
                        'April\'25', 'May\'25', 'June\'25', 'July\'25', 'August\'25', 
                        'Sept\'25', 'Oct\'25', 'Nov\'25', 'Dec\'25', 'Jan\'25', 
                        'Feb\'25', 'March\'25'
                    ],
                    datasets: [
                        {
                            label: 'Complaints Raised',
                            data: [25, 30, 28, 45, 27, 35, 30, 32, 30, 25, 23, 25],
                            borderColor: '#4472C4',
                            backgroundColor: 'rgba(68, 114, 196, 0.1)',
                            borderWidth: 3,
                            tension: 0.4,
                            fill: false,
                            pointRadius: 4,
                            pointHoverRadius: 6,
                            pointBackgroundColor: '#4472C4',
                            pointBorderColor: '#fff',
                            pointBorderWidth: 2,
                            yAxisID: 'y',
                            pointHitRadius: 10,
                            datalabels: {
                                display: true,
                                align: 'top',
                                offset: 8,
                                font: {
                                    weight: 'bold',
                                    size: 11
                                },
                                color: '#4472C4'
                            }
                        },
                        {
                            label: 'Complaints Solved',
                            data: [22, 18, 25, 29, 25, 20, 28, 30, 28, 22, 20, 24],
                            borderColor: '#0cba3bff',
                            backgroundColor: 'rgba(237, 125, 49, 0.1)',
                            borderWidth: 3,
                            tension: 0.4,
                            fill: false,
                            pointRadius: 4,
                            pointHoverRadius: 6,
                            pointBackgroundColor: '#0cba3bff',
                            pointBorderColor: '#fff',
                            pointBorderWidth: 2,
                            yAxisID: 'y',
                            pointHitRadius: 10,
                            datalabels: {
                                display: true,
                                align: 'bottom',
                                offset: 8,
                                font: {
                                    weight: 'bold',
                                    size: 11
                                },
                                color: '#0cba3bff'
                            }
                        },
                        {
                            label: 'Average Resolution Rate (days)',
                            data: [4, 5, 6, 3, 20, 3, 35, 4, 8, 4, 3, 5],
                            borderColor: '#A5A5A5',
                            backgroundColor: 'rgba(165, 165, 165, 0.1)',
                            borderWidth: 2,
                            borderDash: [8, 4],
                            tension: 0.4,
                            fill: false,
                            pointRadius: 4,
                            pointHoverRadius: 6,
                            pointBackgroundColor: '#A5A5A5',
                            pointBorderColor: '#fff',
                            pointBorderWidth: 2,
                            yAxisID: 'y1',
                            pointHitRadius: 10,
                            datalabels: {
                                display: false
                            }
                        }
                    ]
                };

                const config = {
                    type: 'line',
                    data: data,
                    plugins: [ChartDataLabels],
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        interaction: {
                            mode: 'index',
                            intersect: false,
                        },
                        events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
                        plugins: {
                            title: {
                                display: false,
                                text: 'Complaint Trends Analysis',
                                font: {
                                    size: 20,
                                    weight: 'bold'
                                },
                                padding: {
                                    top: 10,
                                    bottom: 20
                                },
                                color: '#333'
                            },
                            legend: {
                                display: true,
                                position: 'top',
                                onClick: function(e, legendItem, legend) {
                                    const index = legendItem.datasetIndex;
                                    const chart = legend.chart;
                                    const meta = chart.getDatasetMeta(index);

                                    // Toggle visibility
                                    meta.hidden = meta.hidden === null ? !chart.data.datasets[index].hidden : null;

                                    // Update chart
                                    chart.update();
                                },
                                onHover: function(e) {
                                    e.native.target.style.cursor = 'pointer';
                                },
                                onLeave: function(e) {
                                    e.native.target.style.cursor = 'default';
                                },
                                labels: {
                                    usePointStyle: true,
                                    padding: 5,
                                    font: {
                                        size: 13
                                    },
                                    color: '#666',
                                    generateLabels: function(chart) {
                                        const datasets = chart.data.datasets;
                                        return datasets.map((dataset, i) => ({
                                            text: dataset.label,
                                            fillStyle: dataset.borderColor,
                                            strokeStyle: dataset.borderColor,
                                            lineWidth: 2,
                                            hidden: !chart.isDatasetVisible(i),
                                            index: i,
                                            datasetIndex: i
                                        }));
                                    }
                                }
                            },
                            tooltip: {
                                enabled: true,
                                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                                padding: 12,
                                titleFont: {
                                    size: 14,
                                    weight: 'bold'
                                },
                                bodyFont: {
                                    size: 13
                                },
                                borderColor: 'rgba(255, 255, 255, 0.2)',
                                borderWidth: 1,
                                displayColors: true,
                                callbacks: {
                                    label: function(context) {
                                        let label = context.dataset.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.parsed.y !== null) {
                                            if (context.datasetIndex === 2) {
                                                label += context.parsed.y + ' days';
                                            } else {
                                                label += context.parsed.y + ' complaints';
                                            }
                                        }
                                        return label;
                                    }
                                }
                            }
                        },
                        scales: {
                            x: {
                                display: true,
                                title: {
                                    display: false
                                },
                                grid: {
                                    display: true,
                                    color: 'rgba(0, 0, 0, 0.05)',
                                    drawBorder: false
                                },
                                ticks: {
                                    font: {
                                        size: 12
                                    },
                                    color: '#666'
                                }
                            },
                            y: {
                                display: true,
                                position: 'left',
                                title: {
                                    display: true,
                                    text: 'Number of Complaints',
                                    font: {
                                        size: 13,
                                        weight: 'bold'
                                    },
                                    color: '#333'
                                },
                                grid: {
                                    display: true,
                                    color: 'rgba(0, 0, 0, 0.08)',
                                    drawBorder: false
                                },
                                beginAtZero: true,
                                ticks: {
                                    display: false
                                }
                            },
                            y1: {
                                display: true,
                                position: 'right',
                                title: {
                                    display: true,
                                    text: 'Resolution Time (days)',
                                    font: {
                                        size: 13,
                                        weight: 'bold'
                                    },
                                    color: '#333'
                                },
                                grid: {
                                    display: false
                                },
                                beginAtZero: true,
                                ticks: {
                                    display: false
                                }
                            }
                        }
                    }
                };

                // Create the chart and store it
                const complaintChart = new Chart(ctx, config);

                // Handle window resize for better responsiveness
                const resizeHandler = function() {
                    if (complaintChart) {
                        complaintChart.resize();
                    }
                };

                window.addEventListener('resize', resizeHandler);

                // Cleanup function (useful if you need to destroy the chart later)
                window.destroyComplaintChart = function() {
                    if (complaintChart) {
                        complaintChart.destroy();
                        window.removeEventListener('resize', resizeHandler);
                    }
                };
            }
        })();