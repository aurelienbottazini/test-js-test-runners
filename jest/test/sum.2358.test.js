const sum2358 = require('../sum2358.js');

test('adds 23 + 44 to equal 67 + 0.5484430507366904', () => {
  expect(sum2358(23, 44)).toBe(67 + 0.5484430507366904);
});