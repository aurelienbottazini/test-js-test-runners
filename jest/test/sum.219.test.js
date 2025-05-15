const sum219 = require('../sum219.js');

test('adds 24 + 53 to equal 77 + 0.4202588630306796', () => {
  expect(sum219(24, 53)).toBe(77 + 0.4202588630306796);
});