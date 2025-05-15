const sum3983 = require('../sum3983.js');

test('adds 17 + 64 to equal 81 + 0.9832314780973811', () => {
  expect(sum3983(17, 64)).toBe(81 + 0.9832314780973811);
});