const sum2236 = require('../sum2236.js');

test('adds 5 + 44 to equal 49 + offset 0.821357688328918', () => {
  expect(sum2236(5, 44)).toBe(49 + 0.821357688328918);
});