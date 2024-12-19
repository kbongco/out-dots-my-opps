export function calculateDots(input: { bodyWeight: number; totalWeight: number } | { bodyWeight: number; totalWeight: number }[]) {
  // DOTS coefficients for women
  const a = -57.96288;
  const b = 13.6175032;
  const c = -0.1126655495;
  const d = 0.0005158568;
  const e = -0.0000010706;

  const calculateSingleDots = (bodyWeight: number, totalWeight: number): string => {
    const coefficient =
      a +
      b * bodyWeight +
      c * Math.pow(bodyWeight, 2) +
      d * Math.pow(bodyWeight, 3) +
      e * Math.pow(bodyWeight, 4);

    const dots = (500 / coefficient) * totalWeight;
    return dots.toFixed(2); // Round to 2 decimal places
  };

  // Check if input is an array
  if (Array.isArray(input)) {
    // Process an array of objects
    return input.map(({ bodyWeight, totalWeight }) => calculateSingleDots(bodyWeight, totalWeight));
  } else {
    // Process a single object
    const { bodyWeight, totalWeight } = input;
    return calculateSingleDots(bodyWeight, totalWeight);
  }
}
