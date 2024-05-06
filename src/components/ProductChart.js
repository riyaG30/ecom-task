import React from 'react';
import { Chart as ChartJS, PieController } from 'chart.js'; 
ChartJS.register(PieController); 
const ProductChart = ({ chartData }) => {
  if (!chartData) {
    return null; 
  }
  return (
    <div>
      <canvas id="productChart" width="400" height="400"></canvas>
    </div>
  );
};
export default ProductChart;

