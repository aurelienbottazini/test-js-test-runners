const sum4713 = require('../sum4713.js');

test('adds 65 + 14 to equal 79 + 0.0086497667051193', () => {
  expect(sum4713(65, 14)).toBe(79 + 0.0086497667051193);
});