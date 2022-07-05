// 1. NaN
// NaN stands for "Not a Number"
console.log("1.1", isNaN("hello"));
console.log("1.2", isNaN(3));
console.log("1.3", typeof NaN);

// 2. Rounding
console.log("2.1", (0.1 * 0.2).toFixed(2));

// 3. Infinity
console.log("3.1", Infinity / 0);
console.log("3.2", Infinity / Infinity);
console.log("3.3", 1 / 0);
