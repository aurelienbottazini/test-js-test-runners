const sum2485 = require('../sum2485.js');

test('adds 85 + 74 to equal 159 + offset 0.37385716838606475', () => {
  expect(sum2485(85, 74)).toBe(159 + 0.37385716838606475);
});