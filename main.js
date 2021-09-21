// generate random race number from 0 - 999 (task 1)
let raceNumber = Math.floor(Math.random() * 1000);

// indicates whether a runner registered early (task 2)
const registeredEarly = true;

// indicates runners age (task 3)
const age = 15;

// control flow statement checks whether runner is an adut and registered early, adds 1000 to raceNumber if true (task 4)
if (age > 18 && registeredEarly === true) raceNumber += 1000;

// control flow statement checks above conditions and tells them race time and race number (task 5, 6 and 7)
if (age > 18 && registeredEarly === true) {
  console.log(`Thank you for registering early. You are scheduled to race at 9:30 AM and your race number is ${raceNumber}.`);
} else if (age > 18 && registeredEarly != true) {
  console.log(`You are scheduled to race at 11:00 AM and your race number is ${raceNumber}.`);
} else if (age < 18) {
  console.log(`You are scheduled to race at 12:30 PM and your race number is ${raceNumber}.`);
} else {
  console.log('Please go visit the registration desk for additional details.');
}