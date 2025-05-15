const sum439 = require('../sum439.js');

test('adds 23 + 75 to equal 98 + offset 0.4731051348159241', () => {
  expect(sum439(23, 75)).toBe(98 + 0.4731051348159241);
});