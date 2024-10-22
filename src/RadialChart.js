import React, { useState } from 'react';
import './RadialChart.css';

const RadialChart = ({ data, targetValue, personalizedTextFn, unit }) => {
  const [hoveredDay, setHoveredDay] = useState(null); // Track which day is currently hovered over
  const [fixedDay, setFixedDay] = useState(null); // Track which day is clicked/fixed for details

  const innerRadius = 80; // Radius of the inner circle (center)
  const fullRadius = 170; // Maximum height for the bars representing data values
  const totalDays = data.length; // Total number of data points (e.g., days of the week)
  const sectorWidth = 360 / totalDays; // Width of each sector (angle per data point)

  // Get the minimum and maximum values in the dataset
  const minValue = Math.min(...data.map((day) => day.value));
  const maxValue = Math.max(...data.map((day) => day.value));

  // Adjust the outerRadius dynamically based on the target value
  const outerRadius = 130 + ((targetValue - minValue) / (maxValue - minValue)) * 40;

  // Calculate bar height with logarithmic scaling to make smaller values more visible
  const minimumBarHeight = 20; // Ensure every bar has at least this height for visibility

  // Function to compute the bar height based on the value using a logarithmic scale
  const calculateBarHeight = (value) => {
    // Normalize the height using a logarithmic scale to make small value variations more visible
    const logScale = (Math.log1p(value - minValue) / Math.log1p(maxValue - minValue));
    const height = logScale * (fullRadius - innerRadius) + innerRadius;

    // Ensure the bar height is not smaller than the minimum value
    return Math.max(height, minimumBarHeight);
  };

  // Get default color for bars
  const getDefaultColor = () => 'url(#blueGradient)'; // Default gradient for non-hovered bars

  // Get the color for the hovered bar based on its relation to the target value
  const getHoverColor = (value) => {
    if (value > targetValue) return 'url(#redOrangeGradient)'; // Above the target
    if (value < targetValue) return 'url(#greenGradient)'; // Below the target
    return 'url(#yellowGradient)'; // Exactly on target
  };

  // Convert polar coordinates (angle and radius) into Cartesian coordinates (x, y)
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180.0); // Adjust angle to start at top
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  // Generate the SVG path for a sector (pie slice) based on polar coordinates
  const describeSector = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle); // Calculate start position
    const end = polarToCartesian(x, y, radius, startAngle); // Calculate end position
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'; // Determine if the arc is large or small

    // Return the SVG path string to describe the sector shape
    return [
      `M ${start.x} ${start.y}`, // Move to the start point
      `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`, // Draw the arc
      `L ${x} ${y}`, // Draw a line back to the center
      'Z', // Close the path
    ].join(' ');
  };

  // Handle click events to fix a specific day and display detailed information
  const handleClick = (day) => setFixedDay(day);

  // Reset the view when clicking on the background (clears the fixed day)
  const handleBackgroundClick = () => setFixedDay(null);

  return (
    <div className="chart" onClick={handleBackgroundClick}> {/* Reset day details on background click */}
      <svg width="500" height="400" viewBox="0 0 500 500" className="radial-chart">
        {/* Define color gradients for different bar states */}
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#c2e3ff', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#a8d5f2', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" style={{ stopColor: '#fff7ae', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ffd966', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" style={{ stopColor: '#c8e6c9', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#a5d6a7', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="redOrangeGradient" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" style={{ stopColor: '#ff9a76', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ff6b6b', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Dotted circle representing the target value boundary, dynamically adjusted based on the target value */}
        <circle
          cx="250"
          cy="250"
          r={outerRadius}
          fill="none"
          stroke="#e6e6e6"
          strokeWidth="2"
          strokeDasharray="4, 6"
        />

        {/* Generate and render each data sector (one per day) */}
        {data.map((day, index) => {
          const barHeight = calculateBarHeight(day.value); // Compute bar height
          const startAngle = (index * 360) / totalDays; // Start angle of the sector
          const endAngle = startAngle + sectorWidth; // End angle of the sector
          const fillColor = hoveredDay === day || fixedDay === day ? getHoverColor(day.value) : getDefaultColor(); // Color based on hover state

          return (
            <g
              key={index}
              onMouseEnter={() => setHoveredDay(day)} // Set hovered day
              onMouseLeave={() => setHoveredDay(null)} // Clear hover state
              onClick={() => handleClick(day)} // Set fixed day on click
              style={{ cursor: 'pointer' }}
            >
              {/* Draw sector */}
              <path d={describeSector(250, 250, barHeight, startAngle, endAngle)} fill={fillColor} />

              {/* Display day label outside the bar */}
              <text
                x={polarToCartesian(250, 250, fullRadius + 25, (startAngle + endAngle) / 2).x}
                y={polarToCartesian(250, 250, fullRadius + 25, (startAngle + endAngle) / 2).y}
                textAnchor="middle"
                fill="#333"
                className="day-text bold-text"
              >
                {day.day}
              </text>

              {/* Display the value of the bar inside when hovered or fixed */}
              {(hoveredDay === day || fixedDay === day) && (
                <text
                  x={polarToCartesian(250, 250, (barHeight + innerRadius) / 2, (startAngle + endAngle) / 2).x}
                  y={polarToCartesian(250, 250, (barHeight + innerRadius) / 2, (startAngle + endAngle) / 2).y}
                  textAnchor="middle"
                  fill="#333"
                  className="value-text"
                >
                  {day.value} {unit}
                </text>
              )}
            </g>
          );
        })}

        {/* Center circle for the target value */}
        <circle
          cx="250"
          cy="250"
          r={innerRadius}
          fill="#ffffff"
          stroke="rgba(0, 0, 0, 0.15)"
          strokeWidth="2"
          style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.05))', zIndex: 2 }}
        />

        {/* Display the target value in the center */}
        <text
          x="250"
          y="250"
          className="center-text"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="rgba(0, 0, 0, 0.8)"
          style={{ filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2))' }}
        >
          Target: {targetValue} {unit}
        </text>
      </svg>

      {/* Display personalized text for the hovered or fixed day below the chart */}
      {hoveredDay || fixedDay ? (
        <div className="hover-description" style={{ marginTop: '-70px' }}> {/* Adjust margin for text */}
          <p className="personalized-text">
            {hoveredDay ? personalizedTextFn(hoveredDay) : personalizedTextFn(fixedDay)}
          </p>
        </div>
      ) : (
        <div className="hover-description" style={{ marginTop: '-70px' }}>
          <p className="personalized-text">Hover over a day to see your details!</p>
        </div>
      )}
    </div>
  );
};

export default RadialChart;
