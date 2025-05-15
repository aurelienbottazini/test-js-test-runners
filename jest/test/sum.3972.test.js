const sum3972 = require('../sum3972.js');

test('adds 27 + 22 to equal 49 + offset 0.8624641451788566', () => {
  expect(sum3972(27, 22)).toBe(49 + 0.8624641451788566);
});