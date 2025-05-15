const sum4481 = require('../sum4481.js');

test('adds 48 + 55 to equal 103 + offset 0.1659043863643127', () => {
  expect(sum4481(48, 55)).toBe(103 + 0.1659043863643127);
});