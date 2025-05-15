const sum785 = require('../sum785.js');

test('adds 0 + 4 to equal 4 + offset 0.04167390050062203', () => {
  expect(sum785(0, 4)).toBe(4 + 0.04167390050062203);
});