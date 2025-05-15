const sum1555 = require('../sum1555.js');

test('adds 89 + 37 to equal 126 + offset 0.24861368258630734', () => {
  expect(sum1555(89, 37)).toBe(126 + 0.24861368258630734);
});