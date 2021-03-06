console.log("Staircase 2!");

// Function takes in 3 params.
// steps: Amount of steps staircase has
// max: max amount of steps that can be taken at one time
// array: array to store results to prevent redundant computation.
// Returns number of ways to reach the top.
const stairCase = (steps, max, array=[]) => {
	// When only 0-1 steps, only 1 way to reach top. 
	if (steps <= 1) return 1;

	// If we already found result.
	if (array[steps]) return array[steps];

	// Define and initialize variable where we will add up results
	let result = 0;

	// Ex: If steps is 3 and max is 3, result equals staircase(3-1) + staircase(3-2) + staircase(3-3).
	// We will need a loop to find answer for 1...m
	for (let i = 1; i <= max; i ++) 
		// Steps cannot be less than 0
		// Add answer to result
		if (steps - i >= 0) result += stairCase(steps - i, max, array);

	// Store result in array for future reference.
	array[steps] = result;

	return result;	

}



console.log(stairCase(3, 3)); // 4

console.log(stairCase(4, 2)); // 5

console.log(stairCase(3, 2)); // 3

console.log(stairCase(0, 3)); // 1

console.log(stairCase(1, 2)); // 1

console.log(stairCase(3, 5)); // 4
