const sum2308 = require('../sum2308.js');

test('adds 10 + 13 to equal 23 + offset 0.050887370652290875', () => {
  expect(sum2308(10, 13)).toBe(23 + 0.050887370652290875);
});