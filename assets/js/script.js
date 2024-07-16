/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Script file
Description: JS clock
(c) Copyright by BRS with Nyros. 
**/

/* Get DOM Elements */
const secondHand = document.querySelector(".secondHand");
const hourHand = document.querySelector(".hourHand");
const minuteHand = document.querySelector(".minuteHand");

// Helper function responsible for calculating the amount to rotate a hand
const calcDegrees = (time, max) => (time / max) * 360;

function updateClock() {
  const currentTime = new Date();

  // Get hours, minutes, seconds
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Format time nicely
  const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

  // Get today's date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentTime.toLocaleDateString('en-US', options);

  // Update the time and date display
  const timeAndDateElement = document.getElementById('timeAndDate');
  timeAndDateElement.innerHTML = `<p class="fs-4">${formattedTime}</p><p>${formattedDate}</p>`;
  
  // Calculate rotation degrees for clock hands
  const secondHandDegrees = calcDegrees(seconds, 60);
  const minuteHandDegrees = calcDegrees(minutes, 60);
  const hourHandDegrees = calcDegrees(hours * 60 + minutes, 720);

  // Apply rotation to clock hands
  secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
}

// Call updateClock() initially to avoid delay in displaying time
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

let chathams_blue = "#1A4B84";

// Set the Theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);
