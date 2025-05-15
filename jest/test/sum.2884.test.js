const sum2884 = require('../sum2884.js');

test('adds 8 + 24 to equal 32 + 0.902423596857525', () => {
  expect(sum2884(8, 24)).toBe(32 + 0.902423596857525);
});