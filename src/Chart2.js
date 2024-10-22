import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Import all the required health metrics and weekly data for each variable
import {
  metrics,
  weeklyData,
  weightData,
  stepsData,
  heartRateData,
  bloodPressureData,
  sleepData,
  bloodSugarData,
  oxygenSaturationData,
  cholesterolData,
  painLevelData,
  moodData,
  waterIntakeData,
  bodyTemperatureData,
  respiratoryRateData,
  exerciseDurationData,
  fatigueLevelData,
  medicationAdherenceData,
  stressLevelData
} from './healthData';

// Import functions to generate personalized text based on the metric values
import {
  getWeightText,
  getStepsText,
  getHeartRateText,
  getBloodPressureText,
  getSleepText,
  getBloodSugarText,
  getOxygenSaturationText,
  getCholesterolText,
  getPainLevelText,
  getMoodText,
  getWaterIntakeText,
  getBodyTemperatureText,
  getRespiratoryRateText,
  getExerciseDurationText,
  getFatigueLevelText,
  getMedicationAdherenceText,
  getStressLevelText
} from './healthData';

import { getPersonalizedText } from './personalizedText'; // Helper function to retrieve personalized messages based on the selected metric
import RadialChart from './RadialChart'; // Reusable component for displaying radial charts

// Full-page container for the entire health graph UI
const FullPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* Ensures the content doesn't overflow out of view */
  position: relative;
  padding: 50px; /* Provides spacing around the chart */
`;

// Animation for zoom-in effect when a metric is selected
const bounceZoom = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1.15);
  }
`;

// Zoomable SVG for smooth transitions when zooming into specific metrics
const ZoomableSvg = styled.svg`
  width: 100%;
  height: 100%;
  transform-origin: center;
  ${({ zoom, x, y }) =>
    zoom
      ? css`
          transform: translate(${x}px, ${y}px) scale(1.5);
          animation: ${bounceZoom} 0.6s ease-in-out;
        `
      : 'transform: scale(1)'};
  transition: transform 0.6s ease-in-out;
`;

// Wrapper to position the charts dynamically based on the selected metric
const ChartWrapper = styled.div`
  position: absolute;
  z-index: 0.5; /* Ensures that charts appear above other elements */
  transition: top 0.6s ease-in-out, left 0.6s ease-in-out;
  transform: translate(-50%, -50%);
`;

// Container for the text in the center of the radial chart
const CenterTextContainer = styled.foreignObject`
  x: ${(props) => props.$centerX - 200}px;
  y: ${(props) => props.$centerY - 100}px;
  width: 400px;
  height: 230px;
  text-align: center;
  font-size: 18px;
  line-height: 1.5;
  font-family: 'Roboto', sans-serif;
  color: #333;
  padding: 45px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Converts polar coordinates to Cartesian for positioning points on the radial chart
const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180.0);
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

// Calculates the position of each metric's dot relative to its value
const getMetricPosition = (index, total, value, min, max, maxRadius, centerX, centerY) => {
  let radius;

  // Position the dot closer to the center if the value is below the minimum, or slightly outside if above the maximum
  if (value < min) {
    radius = maxRadius * 0.5;
  } else if (value > max) {
    radius = maxRadius * 1.15;
  } else {
    radius = maxRadius * 0.95;
  }

  const angle = (index * 360) / total;
  return polarToCartesian(centerX, centerY, radius, angle);
};

// Calculates the position of the labels for each metric (outside the circle)
const getLabelPosition = (index, total, outerRadius, centerX, centerY) => {
  const angle = (index * 360) / total;
  return polarToCartesian(centerX, centerY, outerRadius + 70, angle); // Labels placed slightly outside the outer circle
};

// Determines where to position the line chart based on the metric selected
const getLineChartPosition = (x, y, metricName) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  let chartX = x;
  let chartY = y;

  // Adjust chart positioning dynamically based on the metric type
  switch (metricName) {
    case 'Blood Pressure':
    case 'Sleep Duration (Hours)':
    case 'Weight (kg)':
    case 'Blood Sugar (mg/dL)':
    case 'Oxygen Saturation (%)':
      chartX += 600; // Move to the right
      chartY += 200;
      break;

    case 'Cholesterol (mg/dL)':
      chartX += 400; // Move right and down
      chartY += 1000;
      break;

    case 'Pain Level (1-10)':
    case 'Mood':
    case 'Water Intake (Liters)':
      chartX += 300;
      chartY += 500; // Move downward
      if (metricName === 'Water Intake (Liters)') {
        chartX -= 150; // Adjust Water Intake position further
      }
      break;

    case 'Body Temperature (°C)':
    case 'Respiratory Rate (Breaths/min)':
    case 'Exercise Duration (Minutes)':
    case 'Fatigue Level (1-10)':
    case 'Medication Adherence (%)':
      chartX += 250; // Move slightly to the left
      break;

    case 'Stress Level (1-10)':
    case 'Steps Taken':
    case 'Heart Rate (BPM)':
      chartX += 500; // Move upward
      chartY += 100;
      if (metricName === 'Steps Taken') {
        chartX = 550; // Move Steps further left-down
        chartY -= 200;
      }
      break;

    default:
      chartX += 150; // Default position
      break;
  }

  // Ensure the chart stays within the window boundaries
  chartX = Math.min(Math.max(100, chartX), windowWidth - 350);
  chartY = Math.min(Math.max(100, chartY), windowHeight - 250);

  return { chartX, chartY };
};

// Define target values for each metric
const targetValues = {
  StepsTaken: 10000,
  HeartRate: 70,
  BloodPressure: 120,
  SleepDuration: 8,
  Weight: 76,
  BloodSugar: 99,
  OxygenSaturation: 98,
  Cholesterol: 180,
  PainLevel: 2,
  Mood: 'Good',
  WaterIntake: 2.5,
  BodyTemperature: 36.8,
  RespiratoryRate: 16,
  ExerciseDuration: 60,
  FatigueLevel: 3,
  MedicationAdherence: 100,
  StressLevel: 3,
};

const RadialHealthGraph = () => {
  const [hoveredMetric, setHoveredMetric] = useState(null); // Keeps track of which metric is hovered over
  const [selectedMetric, setSelectedMetric] = useState(null); // Keeps track of which metric is selected
  const [viewBox, setViewBox] = useState('0 0 900 900'); // Defines the visible area of the SVG
  const [zoomIn, setZoomIn] = useState(false); // Boolean for controlling zoom state

  const centerX = 400; // Center X coordinate for the radial chart
  const centerY = 400; // Center Y coordinate for the radial chart
  const maxRadius = 300; // Maximum radius for the outer circle

  // Calculate the positions for each dot (representing a metric)
  const points = metrics.map((metric, index) =>
    getMetricPosition(index, metrics.length, metric.value, metric.targetMin, metric.targetMax, maxRadius, centerX, centerY)
  );

  // Resets the view to the original state
  const resetView = () => {
    setSelectedMetric(null);
    setViewBox('0 0 900 900'); // Reset to full view
    setZoomIn(false); // Reset zoom
  };

  // Handles selecting a metric and zooms in on the corresponding dot
  const handleSelectMetric = (index) => {
    setSelectedMetric(index);
    const { x, y } = points[index];
    setViewBox(`${x - 350} ${y - 350} 700 700`); // Adjust the viewBox to zoom into the selected area
    setZoomIn(true); // Activate zoom effect
  };

  // Filter out invalid points (in case of any erroneous data)
  const validPoints = points.filter((point) => !isNaN(point.x) && !isNaN(point.y)); // Ensure valid coordinates

  // Calculate the label positions (outside the main circle)
  const labelPositions = metrics.map((metric, index) =>
    getLabelPosition(index, metrics.length, maxRadius, centerX, centerY)
  );

  return (
    <FullPageContainer onClick={resetView}> {/* Resets the view when the user clicks outside the chart */}
      <ZoomableSvg viewBox={viewBox} zoom={zoomIn}>
        {/* Outer circle for the radial chart */}
        <circle cx={centerX} cy={centerY} r={maxRadius} fill="rgba(102, 179, 102, 0.7)" stroke="none" />

        {/* Inner white circle */}
        <circle cx={centerX} cy={centerY} r={250} fill="#ffffff" stroke="none" />

        {/* Polyline connecting all valid points (dots) */}
        <polyline fill="rgba(150, 150, 150, 0.2)" stroke="none" points={validPoints.map((point) => `${point.x},${point.y}`).join(' ')} />

        {/* Center text display (Personalized Text) */}
        <CenterTextContainer $centerX={centerX} $centerY={centerY}>
          <div xmlns="http://www.w3.org/1999/xhtml">
            {selectedMetric !== null
              ? getPersonalizedText(metrics[selectedMetric]) // Show the text for the selected metric
              : hoveredMetric
                ? getPersonalizedText(hoveredMetric) // Show the text for the hovered metric
                : 'Hover over a metric to see more details'}
          </div>
        </CenterTextContainer>

        {/* Render dots for each metric */}
        {validPoints.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r={hoveredMetric?.name === metrics[index].name ? 12 : 8} // Enlarge the hovered dot
            fill={metrics[index].value < metrics[index].targetMin || metrics[index].value > metrics[index].targetMax ? '#E35E54' : '#3B3A36'}
            onMouseEnter={() => setHoveredMetric(metrics[index])}
            onMouseLeave={() => setHoveredMetric(null)}
            onClick={(e) => {
              e.stopPropagation(); // Prevent resetting the view when a dot is clicked
              handleSelectMetric(index);
            }}
            style={{ display: selectedMetric === null || selectedMetric === index ? 'block' : 'none' }} // Show only relevant dots when zoomed in
          />
        ))}

        {/* Render labels for each metric */}
        {metrics.map((metric, index) => {
          const { x, y } = getLabelPosition(index, metrics.length, maxRadius, centerX, centerY);
          return (
            <text
              x={selectedMetric === index ? centerX : x} // Move label to the center when selected
              y={selectedMetric === index ? centerY - 120 : y} // Adjust position to be above the center text
              textAnchor="middle"
              fontSize={selectedMetric?.name === metrics[index].name ? '16px' : '14px'}
              fontFamily="Arial"
              fontWeight={selectedMetric === index ? 'bold' : 'normal'} // Bold the selected label
              fill={metrics[index].value < metrics[index].targetMin || metrics[index].value > metrics[index].targetMax ? '#E35E54' : '#3B3A36'}
              onMouseEnter={() => setHoveredMetric(metrics[index])}
              onMouseLeave={() => setHoveredMetric(null)}
              style={{
                display: selectedMetric === null || selectedMetric === index ? 'block' : 'none', // Show only the relevant label
              }}
            >
              {metric.name}
            </text>
          );
        })}
      </ZoomableSvg>

      {/* Conditionally render either the RadialChart or LineChart based on the selected metric */}
      {selectedMetric !== null && (
        <ChartWrapper
          style={{
            top: `${getLineChartPosition(points[selectedMetric].x, points[selectedMetric].y, metrics[selectedMetric].name).chartY}px`,
            left: `${getLineChartPosition(points[selectedMetric].x, points[selectedMetric].y, metrics[selectedMetric].name).chartX}px`,
          }}
        >
          {metrics[selectedMetric].name === 'Steps Taken' ? (
            <RadialChart
              data={stepsData}
              targetValue={targetValues.StepsTaken}
              personalizedTextFn={getStepsText}
              unit="steps"
              width={400}
              height={400}
            />
          ) : metrics[selectedMetric].name === 'Weight (kg)' ? (
            <RadialChart
              data={weightData}
              targetValue={targetValues.Weight}
              personalizedTextFn={getWeightText}
              unit="kg"
              width={400}
              height={400}
            />
          ) : metrics[selectedMetric].name === 'Heart Rate (BPM)' ? (
            <RadialChart
              data={heartRateData} // Replace with your heart rate data
              targetValue={targetValues.HeartRate}
              personalizedTextFn={getHeartRateText}
              unit="BPM"
              width={400}
              height={400}
            />
          ) : metrics[selectedMetric].name === 'Blood Pressure' ? (
            <RadialChart
              data={bloodPressureData} // Replace with your blood pressure data
              targetValue={targetValues.BloodPressure} // Target systolic value
              personalizedTextFn={getBloodPressureText} // Text function handling systolic and diastolic
              unit="mmHg"
              width={400}
              height={400}
            />
          ) : metrics[selectedMetric].name === 'Sleep Duration (Hours)' ? (
            <RadialChart
              data={sleepData}
              targetValue={targetValues.SleepDuration}
              personalizedTextFn={getSleepText}
              unit="hours"
              width={400}
              height={400}
            />
          ) : metrics[selectedMetric].name === 'Blood Sugar (mg/dL)' ? (
            <RadialChart
              data={bloodSugarData}
              targetValue={targetValues.BloodSugar}
              personalizedTextFn={getBloodSugarText}
              unit="mg/dL"
              width={400}
              height={400}
            />
          ) : metrics[selectedMetric].name === 'Oxygen Saturation (%)' ? (
            <RadialChart
              data={oxygenSaturationData}
              targetValue={targetValues.OxygenSaturation}
              personalizedTextFn={getOxygenSaturationText}
              unit="%"
              width={400}
              height={400}
            />
          ) : metrics[selectedMetric].name === 'Cholesterol (mg/dL)' ? (
            <RadialChart
              data={cholesterolData}
              targetValue={targetValues.Cholesterol}
              personalizedTextFn={getCholesterolText}
              unit="mg/dL"
              width={400}
              height={400}
            />
          ) : metrics[selectedMetric].name === 'Pain Level (1-10)' ? (
            <RadialChart
              data={painLevelData}
              targetValue={targetValues.PainLevel}
              personalizedTextFn={getPainLevelText}
              unit="scale"
              width={400}
              height={400}
            />
          ) : metrics[selectedMetric].name === 'Mood' ? (
            <RadialChart
              data={moodData}
              targetValue={targetValues.Mood}
              personalizedTextFn={getMoodText}
              unit=""
              width={400}
              height={400}
            />
          ) : metrics[selectedMetric].name === 'Water Intake (Liters)' ? (
            <RadialChart
              data={waterIntakeData}
              targetValue={targetValues.WaterIntake}
              personalizedTextFn={getWaterIntakeText}
              unit="L"
              width={400}
              height={400}
            />
          ) : metrics[selectedMetric].name === 'Body Temperature (°C)' ? (
            <RadialChart
              data={bodyTemperatureData}
              targetValue={targetValues.BodyTemperature}
              personalizedTextFn={getBodyTemperatureText}
              unit="°C"
              width={400}
              height={400}
            />
          ) : metrics[selectedMetric].name === 'Respiratory Rate (Breaths/min)' ? (
            <RadialChart
              data={respiratoryRateData}
              targetValue={targetValues.RespiratoryRate}
              personalizedTextFn={getRespiratoryRateText}
              unit="breaths/min"
              width={400}
              height={400}
            />
          ) : metrics[selectedMetric].name === 'Exercise Duration (Minutes)' ? (
            <RadialChart
              data={exerciseDurationData}
              targetValue={targetValues.ExerciseDuration}
              personalizedTextFn={getExerciseDurationText}
              unit="minutes"
              width={400}
              height={400}
            />
          ) : metrics[selectedMetric].name === 'Fatigue Level (1-10)' ? (
            <RadialChart
              data={fatigueLevelData}
              targetValue={targetValues.FatigueLevel}
              personalizedTextFn={getFatigueLevelText}
              unit="scale"
              width={400}
              height={400}
            />
          ) : metrics[selectedMetric].name === 'Medication Adherence (%)' ? (
            <RadialChart
              data={medicationAdherenceData}
              targetValue={targetValues.MedicationAdherence}
              personalizedTextFn={getMedicationAdherenceText}
              unit="%"
              width={400}
              height={400}
            />
          ) : metrics[selectedMetric].name === 'Stress Level (1-10)' ? (
            <RadialChart
              data={stressLevelData}
              targetValue={targetValues.StressLevel}
              personalizedTextFn={getStressLevelText}
              unit="scale"
              width={400}
              height={400}
            />
          ) : (
            <ResponsiveContainer width={300} height={200}>
              <LineChart data={weeklyData}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          )}
        </ChartWrapper>
      )}
    </FullPageContainer>
  );
};

export default RadialHealthGraph;
