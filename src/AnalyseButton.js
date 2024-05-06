import React, { useState, useEffect } from 'react';
import { IconButton, Button} from '@mui/material';
import { Close } from '@mui/icons-material';
import Chart from 'chart.js/auto';

const AnalyseButton = () => {
  const [showChart, setShowChart] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchCategoryCounts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const counts = {};

      data.forEach(product => {
        counts[product.category] = (counts[product.category] || 0) + 1;
      });

      setCategoryCounts(counts);
      setShowChart(true);
    } catch (error) {
      console.error('Error fetching category counts:', error);
    }
  };

  const toggleChart = () => {
    if (!showChart) {
      fetchCategoryCounts();
    } else {
      setShowChart(false);
    }
  };

  useEffect(() => {
    if (showChart) {
      renderChart();
    }
  }, [showChart, categoryCounts]);

  const renderChart = () => {
    const ctx = document.getElementById('categoryChart');
    if (ctx) {
      if (ctx.chart) {
        ctx.chart.destroy();
      }
      
      // Create a new chart instance
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: Object.keys(categoryCounts),
          datasets: [{
            label: 'Categories',
            data: Object.values(categoryCounts),
            backgroundColor: [
              'red', 'blue', 'green', 'orange', 'yellow', 'purple', 'cyan'
            ]
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Analyse Products'
            }
          },
         
        }
      });
    }
  };
  
  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 100 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={toggleChart}
        style={{ display: showChart ? 'none' : 'block', marginRight: '10px' }}
      >
        Analyse
      </Button>
      {showChart && (
        <div>
          <IconButton
            style={{ position: 'absolute', top: 5, right: 5 }}
            onClick={() => setShowChart(false)}
          >
            <Close />
          </IconButton>
          
          <canvas id="categoryChart" />
        </div>
      )}
    </div>
  );
};

export default AnalyseButton;
