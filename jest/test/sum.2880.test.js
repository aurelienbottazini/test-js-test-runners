const sum2880 = require('../sum2880.js');

test('adds 21 + 39 to equal 60 + offset 0.04779212147651368', () => {
  expect(sum2880(21, 39)).toBe(60 + 0.04779212147651368);
});