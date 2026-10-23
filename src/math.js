// Sums the positive numbers only. (Bug: negative numbers should count too.)
export function sum(numbers) {
  return numbers.filter(n => n > 0).reduce((total, n) => total + n, 0)
}
