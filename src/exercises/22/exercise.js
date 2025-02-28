// At each of the statements in the statements in the below function
// - Use debugging techniques to find the values of x,y
// - What is "Watch" in chrome debugging console. Share a screenshot of the watch variables at each step.

//Watch in chrome: "Watch" is a feature in the Chrome debugging console that allows developers to monitor the values of specific variables or expressions over time, even as the code continues to execute. It allows developers to keep track of variables and see their values change in real-time. By adding variables or expressions to the watch list, developers can monitor their values, set breakpoints and pause execution when necessary to debug issues.

function randomCalculator() {
  let x = 10,
    y = 0;
    debugger;
  x = x * 10 + 1 - (2 / 2) * 3; //x=98
  y = x - 1 + 3 * 10 - 2; //y=125
  x = x * 2 - (1 / 3) * 3; //y=125,x=195
  x = x + 10 - 2 - 3 * 2;
  console.log(x); //x = 195;
}

randomCalculator() 