// healthData.js

export const metrics = [
    { name: 'Steps Taken', value: 5500, targetMin: 6000, targetMax: 10000, isOutOfRange: true },
    { name: 'Heart Rate (BPM)', value: 64, targetMin: 60, targetMax: 100, isOutOfRange: false },
    { name: 'Blood Pressure', value: 140, targetMin: 90, targetMax: 120, isOutOfRange: true },
    { name: 'Sleep Duration (Hours)', value: 8, targetMin: 7, targetMax: 9, isOutOfRange: false },
    { name: 'Weight (kg)', value: 76, targetMin: 70, targetMax: 80, isOutOfRange: false },
    { name: 'Blood Sugar (mg/dL)', value: 130, targetMin: 70, targetMax: 99, isOutOfRange: true },
    { name: 'Oxygen Saturation (%)', value: 97, targetMin: 95, targetMax: 100, isOutOfRange: false },
    { name: 'Cholesterol (mg/dL)', value: 180, targetMin: 150, targetMax: 200, isOutOfRange: false },
    { name: 'Pain Level (1-10)', value: 2, targetMin: 0, targetMax: 5, isOutOfRange: false },
    { name: 'Mood', value: 'Moderate', targetMin: 'Good', targetMax: 'Good', isOutOfRange: true },
    { name: 'Water Intake (Liters)', value: 1.5, targetMin: 2, targetMax: 3, isOutOfRange: true },
    { name: 'Body Temperature (°C)', value: 37.0, targetMin: 36.1, targetMax: 37.2, isOutOfRange: false },
    { name: 'Respiratory Rate (Breaths/min)', value: 15, targetMin: 12, targetMax: 20, isOutOfRange: false },
    { name: 'Exercise Duration (Minutes)', value: 50, targetMin: 30, targetMax: 60, isOutOfRange: false },
    { name: 'Fatigue Level (1-10)', value: 7, targetMin: 0, targetMax: 3, isOutOfRange: true },
    { name: 'Medication Adherence (%)', value: 85, targetMin: 95, targetMax: 100, isOutOfRange: true },
    { name: 'Stress Level (1-10)', value: 8, targetMin: 0, targetMax: 3, isOutOfRange: true },
  ];
  
  export const weeklyData = [
    { day: 'Mon', value: 5200 },
    { day: 'Tue', value: 5800 },
    { day: 'Wed', value: 6000 },
    { day: 'Thu', value: 5900 },
    { day: 'Fri', value: 6100 },
    { day: 'Sat', value: 5500 },
    { day: 'Sun', value: 5700 },
  ];

  // Simulate weekly data for weight tracking
  export const weightData = [
    { day: 'Mon', value: 76 },
    { day: 'Tue', value: 75 },
    { day: 'Wed', value: 74 },
    { day: 'Thu', value: 76 },
    { day: 'Fri', value: 75 },
    { day: 'Sat', value: 74 },
    { day: 'Sun', value: 73 },
  ];
  
  export const stepsData = [
    { day: 'Mon', value: 8100 },
    { day: 'Tue', value: 8500 },
    { day: 'Wed', value: 8000 },
    { day: 'Thu', value: 9100 },
    { day: 'Fri', value: 14500},
    { day: 'Sat', value: 8100 },
    { day: 'Sun', value: 15000 },
  ];
  

// Weekly data for Heart Rate (BPM)
export const heartRateData = [
    { day: 'Mon', value: 62 },
    { day: 'Tue', value: 64 },
    { day: 'Wed', value: 63 },
    { day: 'Thu', value: 65 },
    { day: 'Fri', value: 66 },
    { day: 'Sat', value: 64 },
    { day: 'Sun', value: 63 },
  ];
  
  // Weekly data for Blood Pressure
  export const bloodPressureData = [
    { day: 'Mon', value: 130},
    { day: 'Tue', value: 120},
    { day: 'Wed', value: 110 },
    { day: 'Thu', value: 140 },
    { day: 'Fri', value: 115 },
    { day: 'Sat', value: 125},
    { day: 'Sun', value: 118 },
  ];
  
  
  // Weekly data for Sleep Duration (Hours)
  export const sleepData = [
    { day: 'Mon', value: 7.5 },
    { day: 'Tue', value: 8 },
    { day: 'Wed', value: 7 },
    { day: 'Thu', value: 8 },
    { day: 'Fri', value: 6.5 },
    { day: 'Sat', value: 7.5 },
    { day: 'Sun', value: 8.2 },
  ];
  
  // Weekly data for Blood Sugar (mg/dL)
  export const bloodSugarData = [
    { day: 'Mon', value: 125 },
    { day: 'Tue', value: 130 },
    { day: 'Wed', value: 140 },
    { day: 'Thu', value: 128 },
    { day: 'Fri', value: 135 },
    { day: 'Sat', value: 129 },
    { day: 'Sun', value: 132 },
  ];
  
  // Weekly data for Oxygen Saturation (%)
  export const oxygenSaturationData = [
    { day: 'Mon', value: 96 },
    { day: 'Tue', value: 97 },
    { day: 'Wed', value: 98 },
    { day: 'Thu', value: 97 },
    { day: 'Fri', value: 96 },
    { day: 'Sat', value: 95 },
    { day: 'Sun', value: 97 },
  ];
  
  // Weekly data for Cholesterol (mg/dL)
  export const cholesterolData = [
    { day: 'Mon', value: 180 },
    { day: 'Tue', value: 175 },
    { day: 'Wed', value: 190 },
    { day: 'Thu', value: 185 },
    { day: 'Fri', value: 180 },
    { day: 'Sat', value: 170 },
    { day: 'Sun', value: 165 },
  ];
  
  // Weekly data for Pain Level (1-10)
  export const painLevelData = [
    { day: 'Mon', value: 3 },
    { day: 'Tue', value: 2 },
    { day: 'Wed', value: 4 },
    { day: 'Thu', value: 2 },
    { day: 'Fri', value: 1 },
    { day: 'Sat', value: 3 },
    { day: 'Sun', value: 2 },
  ];
  
  // Weekly data for Mood
  const moodMapping = {
    Good: 3,
    Moderate: 2,
    Poor: 1,
  };
  
  // Simulate weekly data for mood, mapping categorical values to numeric
  export const moodData = [
    { day: 'Mon', value: moodMapping['Moderate'] },
    { day: 'Tue', value: moodMapping['Good'] },
    { day: 'Wed', value: moodMapping['Poor'] },
    { day: 'Thu', value: moodMapping['Moderate'] },
    { day: 'Fri', value: moodMapping['Good'] },
    { day: 'Sat', value: moodMapping['Good'] },
    { day: 'Sun', value: moodMapping['Moderate'] },
  ];
  
  // Weekly data for Water Intake (Liters)
  export const waterIntakeData = [
    { day: 'Mon', value: 1.5 },
    { day: 'Tue', value: 2.0 },
    { day: 'Wed', value: 1.8 },
    { day: 'Thu', value: 2.5 },
    { day: 'Fri', value: 2.0 },
    { day: 'Sat', value: 1.6 },
    { day: 'Sun', value: 1.9 },
  ];
  
  // Weekly data for Body Temperature (°C)
  export const bodyTemperatureData = [
    { day: 'Mon', value: 37.1 },
    { day: 'Tue', value: 37.0 },
    { day: 'Wed', value: 36.9 },
    { day: 'Thu', value: 36.8 },
    { day: 'Fri', value: 37.2 },
    { day: 'Sat', value: 37.1 },
    { day: 'Sun', value: 36.9 },
  ];
  
  // Weekly data for Respiratory Rate (Breaths/min)
  export const respiratoryRateData = [
    { day: 'Mon', value: 15 },
    { day: 'Tue', value: 14 },
    { day: 'Wed', value: 16 },
    { day: 'Thu', value: 15 },
    { day: 'Fri', value: 14 },
    { day: 'Sat', value: 16 },
    { day: 'Sun', value: 15 },
  ];
  
  // Weekly data for Exercise Duration (Minutes)
  export const exerciseDurationData = [
    { day: 'Mon', value: 45 },
    { day: 'Tue', value: 60 },
    { day: 'Wed', value: 55 },
    { day: 'Thu', value: 50 },
    { day: 'Fri', value: 40 },
    { day: 'Sat', value: 60 },
    { day: 'Sun', value: 55 },
  ];
  
  // Weekly data for Fatigue Level (1-10)
  export const fatigueLevelData = [
    { day: 'Mon', value: 5 },
    { day: 'Tue', value: 6 },
    { day: 'Wed', value: 4 },
    { day: 'Thu', value: 7 },
    { day: 'Fri', value: 5 },
    { day: 'Sat', value: 6 },
    { day: 'Sun', value: 7 },
  ];
  
  // Weekly data for Medication Adherence (%)
  export const medicationAdherenceData = [
    { day: 'Mon', value: 85 },
    { day: 'Tue', value: 90 },
    { day: 'Wed', value: 80 },
    { day: 'Thu', value: 85 },
    { day: 'Fri', value: 90 },
    { day: 'Sat', value: 95 },
    { day: 'Sun', value: 90 },
  ];
  
  // Weekly data for Stress Level (1-10)
  export const stressLevelData = [
    { day: 'Mon', value: 6 },
    { day: 'Tue', value: 7 },
    { day: 'Wed', value: 8 },
    { day: 'Thu', value: 7 },
    { day: 'Fri', value: 6 },
    { day: 'Sat', value: 5 },
    { day: 'Sun', value: 6 },
  ];

// Weight
export const getWeightText = (day) => {
  if (day.value > 76) {
    return `🚨 You weighed ${day.value} kg on ${day.day}, which is above your target. Consider healthy food choices and exercise!`;
  } else if (day.value < 76) {
    return `🎉 Great job! You weighed ${day.value} kg on ${day.day}, which is below your target! Keep up the hard work!`;
  } else {
    return `✅ Perfect! You hit your target weight of ${day.value} kg on ${day.day}. Keep it up!`;
  }
};

// Steps Taken
export const getStepsText = (day) => {
  if (day.value > 10000) {
    return `🎉 Amazing! You took ${day.value} steps on ${day.day}, surpassing your goal. Keep up the good work!`;
  } else if (day.value < 10000) {
    return `🚶 You've taken ${day.value} steps on ${day.day}. Keep moving to reach your goal!`;
  } else {
    return `✅ You met your goal with ${day.value} steps on ${day.day}. Great job staying active!`;
  }
};

// Heart Rate
export const getHeartRateText = (day) => {
  if (day.value > 70) {
    return `🚨 Your heart rate was ${day.value} BPM on ${day.day}, which is above your target. Consider relaxation techniques!`;
  } else if (day.value < 70) {
    return `✅ Great! Your heart rate was ${day.value} BPM on ${day.day}, which is below your target! Keep it steady.`;
  } else {
    return `✅ Your heart rate was perfect at ${day.value} BPM on ${day.day}. Keep it up!`;
  }
};

// Blood Pressure
export const getBloodPressureText = (day) => {
    const diastolicValue = 80; // For simplicity, you can hardcode or fetch this from data
    if (day.value > 120) {
      return `🚨 Your blood pressure was ${day.value}/${diastolicValue} mmHg on ${day.day}, which is above your target. Consider monitoring your health closely.`;
    } else if (day.value < 120) {
      return `🎉 Great job! Your blood pressure was ${day.value}/${diastolicValue} mmHg on ${day.day}, which is below your target!`;
    } else {
      return `✅ You had a healthy blood pressure of ${day.value}/${diastolicValue} mmHg on ${day.day}. Keep it up!`;
    }
  };
  
  

// Sleep Duration
export const getSleepText = (day) => {
  if (day.value > 8) {
    return `💤 You slept for ${day.value} hours on ${day.day}, which is more than your goal. Too much sleep can also affect energy!`;
  } else if (day.value < 8) {
    return `😴 You only slept for ${day.value} hours on ${day.day}. Try to get more rest to hit your goal of 8 hours.`;
  } else {
    return `✅ Perfect! You hit your sleep goal of 8 hours on ${day.day}. Rest well!`;
  }
};

// Blood Sugar
export const getBloodSugarText = (day) => {
  if (day.value > 99) {
    return `🚨 Your blood sugar was ${day.value} mg/dL on ${day.day}, which is above your target. Keep an eye on your diet and activity.`;
  } else if (day.value < 99) {
    return `✅ Great! Your blood sugar was ${day.value} mg/dL on ${day.day}, which is below your target. Keep up the healthy habits!`;
  } else {
    return `✅ Your blood sugar was right on target at ${day.value} mg/dL on ${day.day}. Good work!`;
  }
};

// Oxygen Saturation
export const getOxygenSaturationText = (day) => {
  if (day.value > 98) {
    return `💨 Your oxygen saturation was ${day.value}% on ${day.day}, which is above your target. Keep breathing deeply!`;
  } else if (day.value < 98) {
    return `🚨 Your oxygen saturation was ${day.value}% on ${day.day}, which is below your target. Keep an eye on your breathing.`;
  } else {
    return `✅ Your oxygen saturation was perfect at ${day.value}% on ${day.day}.`;
  }
};

// Cholesterol
export const getCholesterolText = (day) => {
  if (day.value > 180) {
    return `🚨 Your cholesterol level was ${day.value} mg/dL on ${day.day}, which is above your target. Consider improving your diet.`;
  } else if (day.value < 180) {
    return `✅ Your cholesterol level of ${day.value} mg/dL on ${day.day} is below your target. Keep up the healthy eating!`;
  } else {
    return `✅ Perfect! Your cholesterol level is right on target at ${day.value} mg/dL.`;
  }
};

// Pain Level
export const getPainLevelText = (day) => {
  if (day.value > 2) {
    return `🚨 You reported a pain level of ${day.value} on ${day.day}, which is above your target. Make sure to rest and manage pain effectively.`;
  } else if (day.value < 2) {
    return `✅ Your pain level was manageable at ${day.value} on ${day.day}. Keep taking care of yourself.`;
  } else {
    return `✅ You reported a pain level of ${day.value} on ${day.day}, which is on target. Keep up the good self-care!`;
  }
};

const reverseMoodMapping = {
    3: 'Good',
    2: 'Moderate',
    1: 'Poor',
  };
  
  export const getMoodText = (day) => {
    const mood = reverseMoodMapping[day.value];
    if (mood === 'Good') {
      return `😊 Your mood was ${mood} on ${day.day}, which is great! Keep feeling positive!`;
    } else if (mood === 'Moderate') {
      return `🙂 Your mood was ${mood} on ${day.day}. You're doing fine, but there's room for improvement.`;
    } else {
      return `😕 Your mood was ${mood} on ${day.day}. Take some time to relax and care for your well-being.`;
    }
  };

// Water Intake
export const getWaterIntakeText = (day) => {
  if (day.value > 2.5) {
    return `💧 Great! You drank ${day.value} liters of water on ${day.day}, exceeding your goal! Stay hydrated.`;
  } else if (day.value < 2.5) {
    return `🚰 You only drank ${day.value} liters of water on ${day.day}. Try to drink more to hit your hydration goal.`;
  } else {
    return `✅ You met your goal by drinking ${day.value} liters of water on ${day.day}.`;
  }
};

// Body Temperature
export const getBodyTemperatureText = (day) => {
  if (day.value > 36.8) {
    return `🌡️ Your body temperature was slightly high at ${day.value}°C on ${day.day}. Monitor for any signs of fever.`;
  } else if (day.value < 36.8) {
    return `🌡️ Your body temperature was slightly low at ${day.value}°C on ${day.day}. Make sure to stay warm and healthy.`;
  } else {
    return `✅ Your body temperature was perfect at ${day.value}°C on ${day.day}.`;
  }
};

// Respiratory Rate
export const getRespiratoryRateText = (day) => {
  if (day.value > 16) {
    return `💨 Your respiratory rate was ${day.value} breaths per minute on ${day.day}, which is higher than normal. Try to relax and breathe slowly.`;
  } else if (day.value < 16) {
    return `✅ Your respiratory rate was calm at ${day.value} breaths per minute on ${day.day}, which is below your target.`;
  } else {
    return `✅ Your respiratory rate was perfect at ${day.value} breaths per minute on ${day.day}. Keep breathing well!`;
  }
};

// Exercise Duration
export const getExerciseDurationText = (day) => {
  if (day.value > 60) {
    return `💪 You exercised for ${day.value} minutes on ${day.day}, surpassing your goal! Keep it going!`;
  } else if (day.value < 60) {
    return `🏋️ You exercised for ${day.value} minutes on ${day.day}. Try to get more activity to hit your goal of 60 minutes.`;
  } else {
    return `✅ You met your exercise goal with ${day.value} minutes of activity on ${day.day}. Great job!`;
  }
};

// Fatigue Level
export const getFatigueLevelText = (day) => {
  if (day.value > 3) {
    return `😴 Your fatigue level was ${day.value} on ${day.day}, which is above your target. Make sure to rest and recharge.`;
  } else if (day.value < 3) {
    return `✅ Your fatigue level was low at ${day.value} on ${day.day}, below your target. Keep up the good energy!`;
  } else {
    return `✅ You felt some fatigue with a level of ${day.value} on ${day.day}, which is normal.`;
  }
};

// Medication Adherence
export const getMedicationAdherenceText = (day) => {
  if (day.value < 100) {
    return `💊 Your medication adherence was ${day.value}% on ${day.day}, which is below your target. Be sure to take your meds on time.`;
  } else {
    return `✅ You achieved perfect medication adherence at ${day.value}% on ${day.day}. Great job staying on track!`;
  }
};

// Stress Level
export const getStressLevelText = (day) => {
  if (day.value > 3) {
    return `😟 Your stress level was ${day.value} on ${day.day}, which is above your target. Take time to relax and reduce your stress.`;
  } else if (day.value < 3) {
    return `😊 Your stress level was ${day.value} on ${day.day}, which is below your target. Keep staying calm!`;
  } else {
    return `✅ You managed your stress well with a level of ${day.value} on ${day.day}. Great job!`;
  }
};
