const sum1486 = require('../sum1486.js');

test('adds 21 + 83 to equal 104 + offset 0.9142822079035441', () => {
  expect(sum1486(21, 83)).toBe(104 + 0.9142822079035441);
});