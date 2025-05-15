const sum510 = require('../sum510.js');

test('adds 9 + 80 to equal 89 + 0.6255806044090061', () => {
  expect(sum510(9, 80)).toBe(89 + 0.6255806044090061);
});