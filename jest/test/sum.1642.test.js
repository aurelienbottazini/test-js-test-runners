const sum1642 = require('../sum1642.js');

test('adds 79 + 31 to equal 110 + offset 0.6605191665664348', () => {
  expect(sum1642(79, 31)).toBe(110 + 0.6605191665664348);
});