const sum1725 = require('../sum1725.js');

test('adds 82 + 26 to equal 108 + offset 0.09737533993235115', () => {
  expect(sum1725(82, 26)).toBe(108 + 0.09737533993235115);
});