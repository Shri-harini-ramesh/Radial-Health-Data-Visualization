// Personalized text based on health metric value
export const getPersonalizedText = (metric) => {
    if (metric.name === 'Steps Taken') {
      if (metric.value < metric.targetMin) {
        return `You've taken ${metric.value} steps today, which is below your goal of ${metric.targetMin} steps. Try to add a brisk 15-minute walk after lunch, or take the stairs instead of the elevator. Every step counts! 🚶‍♂️`;
      } else if (metric.value > metric.targetMax) {
        return `Amazing! You've taken ${metric.value} steps today, far surpassing your target of ${metric.targetMax} steps. You're crushing your fitness goals! Keep moving to stay healthy and strong! 💪`;
      } else {
        return `Well done! You've achieved your goal with ${metric.value} steps today. Keep up the consistent activity to maintain your health. 🎉`;
      }
    } else if (metric.name === 'Heart Rate (BPM)') {
      if (metric.value < metric.targetMin) {
        return `Your heart rate is at ${metric.value} BPM, which is a bit lower than usual. You might be feeling relaxed today! Try some light exercise to bring it into the ideal range. 🏃‍♂️`;
      } else if (metric.value > metric.targetMax) {
        return `Your heart rate is at ${metric.value} BPM, which is above the recommended range. Take a moment to sit down, breathe deeply, and relax. Consider a quick meditation session to bring it down. 🧘‍♀️`;
      } else {
        return `Your heart rate of ${metric.value} BPM is in the perfect range. Keep maintaining a healthy lifestyle with balanced activity and relaxation. 💓`;
      }
    } else if (metric.name === 'Blood Pressure') {
      if (metric.value > metric.targetMax) {
        return `Your blood pressure is at ${metric.value}, which is higher than the ideal range. It could be a result of stress or diet. Take some time to relax, and consider a short walk or some stretching to help lower it. 🌿`;
      } else if (metric.value < metric.targetMin) {
        return `Your blood pressure is at ${metric.value}, which is lower than the recommended range. Make sure you're drinking enough water and eating a balanced diet to stay healthy. 💧`;
      } else {
        return `Great job! Your blood pressure is at ${metric.value}, right where it should be. Keep up the good habits to maintain this healthy balance. 💪`;
      }
    } else if (metric.name === 'Sleep Duration (Hours)') {
      if (metric.value < metric.targetMin) {
        return `You only slept ${metric.value} hours last night, which is below the recommended amount. Try to create a bedtime routine, like reducing screen time and winding down with a book, to help improve your sleep. 😴`;
      } else if (metric.value > metric.targetMax) {
        return `You slept ${metric.value} hours last night, which is a bit more than needed. You must feel well-rested! Keep an eye on your sleep patterns to ensure quality rest. 😌`;
      } else {
        return `Fantastic! You got a solid ${metric.value} hours of sleep last night, which is just what your body needs. Keep it up for optimal health and energy! 🌙`;
      }
    } else if (metric.name === 'Weight (kg)') {
      return `Your current weight is ${metric.value} kg. Tracking your weight regularly can help you stay mindful of your goals. Remember, consistency and balance are key! 💪`;
    } else if (metric.name === 'Blood Sugar (mg/dL)') {
      if (metric.value > metric.targetMax) {
        return `Your blood sugar is at ${metric.value} mg/dL, which is above the recommended range. Pay attention to your diet—try incorporating more fiber and reducing sugary foods to keep things balanced. 🥗`;
      } else if (metric.value < metric.targetMin) {
        return `Your blood sugar is a bit low at ${metric.value} mg/dL. Make sure to eat balanced meals and keep healthy snacks handy to avoid dips. 🍎`;
      } else {
        return `Your blood sugar is at ${metric.value} mg/dL, which is within the healthy range. Great job maintaining your diet and health! 🍎`;
      }
    } else if (metric.name === 'Oxygen Saturation (%)') {
      return `Your oxygen saturation is ${metric.value}%, which is great! Your body is getting the oxygen it needs to function well. Keep breathing easy! 🌬️`;
    } else if (metric.name === 'Cholesterol (mg/dL)') {
      if (metric.value > metric.targetMax) {
        return `Your cholesterol level is ${metric.value} mg/dL, which is above the recommended range. Consider cutting down on processed foods and incorporating more healthy fats, like those found in nuts and fish. 🐟`;
      } else {
        return `Your cholesterol is at a healthy level of ${metric.value} mg/dL. Keep up the good eating habits to maintain this! 🌿`;
      }
    } else if (metric.name === 'Pain Level (1-10)') {
      return `You're reporting a pain level of ${metric.value}. It's important to address any persistent discomfort. If this continues, consult a healthcare professional for advice on pain management. 🩺`;
    } else if (metric.name === 'Mood') {
      if (metric.value === 'Moderate') {
        return `You're feeling moderately today. Take time to do something you enjoy, whether it's a quick walk, listening to music, or chatting with a friend. It can make all the difference! 😊`;
      } else {
        return `You're in a great mood today! Keep spreading positivity and taking care of your mental health. Happiness is contagious! 😃`;
      }
    } else if (metric.name === 'Water Intake (Liters)') {
      if (metric.value < metric.targetMin) {
        return `You've had ${metric.value} liters of water today, which is below the recommended amount. Try carrying a water bottle with you to remind yourself to stay hydrated. 💧`;
      } else {
        return `Great job! You've consumed ${metric.value} liters of water today, staying well-hydrated. Keep it up! 💧`;
      }
    } else if (metric.name === 'Body Temperature (°C)') {
      if (metric.value > metric.targetMax) {
        return `Your body temperature is at ${metric.value}°C, which is a bit high. If you're feeling unwell, make sure to rest, stay hydrated, and monitor for any symptoms. 🌡️`;
      } else if (metric.value < metric.targetMin) {
        return `Your body temperature is at ${metric.value}°C, which is below normal. If you feel cold or fatigued, try warming up with a blanket or hot beverage. 🔥`;
      } else {
        return `Your body temperature is perfectly normal at ${metric.value}°C. Keep taking care of yourself! 😊`;
      }
    } else if (metric.name === 'Respiratory Rate (Breaths/min)') {
      return `Your respiratory rate is at ${metric.value} breaths per minute, which is within the healthy range. Keep breathing easy and staying active! 🌬️`;
    } else if (metric.name === 'Exercise Duration (Minutes)') {
      if (metric.value < metric.targetMin) {
        return `You've exercised for ${metric.value} minutes today, which is below your target of ${metric.targetMin} minutes. A quick workout or a brisk walk could help you hit your goal! 🏋️‍♀️`;
      } else {
        return `Fantastic! You've exercised for ${metric.value} minutes today, hitting your target. Regular activity is key to staying healthy! 🏃‍♂️`;
      }
    } else if (metric.name === 'Fatigue Level (1-10)') {
      return `Your fatigue level is at ${metric.value}. If you're feeling tired, make sure to prioritize rest and take time to recharge. Self-care is essential! 😴`;
    } else if (metric.name === 'Medication Adherence (%)') {
      if (metric.value < metric.targetMin) {
        return `You've adhered to ${metric.value}% of your medication schedule. Staying on track with your medication is important for managing your health, so try setting reminders to help stay consistent. ⏰`;
      } else {
        return `Fantastic! You've adhered to ${metric.value}% of your medication schedule, which is key to managing your health effectively. Keep it up! 💊`;
      }
    } else if (metric.name === 'Stress Level (1-10)') {
      return `Your stress level is at ${metric.value}. If you're feeling overwhelmed, take a break, practice mindfulness, or try some breathing exercises to lower your stress levels. You've got this! 🌿`;
    } else {
      return `Keep up with your health! Hover over a metric to see more details.`;
    }
  };
  