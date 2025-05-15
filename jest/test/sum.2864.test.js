const sum2864 = require('../sum2864.js');

test('adds 66 + 24 to equal 90 + 0.3581844341977317', () => {
  expect(sum2864(66, 24)).toBe(90 + 0.3581844341977317);
});