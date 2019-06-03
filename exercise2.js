//Write a program that accepts one or more numbers as command-line arguments
//and prints the sum of those numbers to the console (stdout).
arguments = process.argv;
nums = arguments.slice(2, arguments.length);
sum = 0;
for (i = 0; i < nums.length; i++) {
  sum += Number(nums[i]);
}
console.log(sum);