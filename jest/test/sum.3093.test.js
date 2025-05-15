const sum3093 = require('../sum3093.js');

test('adds 8 + 4 to equal 12 + offset 0.6570288298439876', () => {
  expect(sum3093(8, 4)).toBe(12 + 0.6570288298439876);
});