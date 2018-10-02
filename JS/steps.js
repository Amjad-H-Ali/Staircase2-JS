console.log("Staircase 2!");

// Function takes in 3 params.
// steps: Amount of steps staircase has
// max: max amount of steps that can be taken at one time
// array: array to store results to prevent redundant computation.
// Returns number of ways to reach the top.
const stairCase = (steps, max, array=[]) => {
	// When only 0-1 steps, only 1 way to reach top. 
	if (steps <= 1) return 1;

}