const sum536 = require('../sum536.js');

test('adds 96 + 63 to equal 159 + 0.003485362854721341', () => {
  expect(sum536(96, 63)).toBe(159 + 0.003485362854721341);
});