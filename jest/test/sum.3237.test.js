const sum3237 = require('../sum3237.js');

test('adds 53 + 58 to equal 111 + 0.2929362460296858', () => {
  expect(sum3237(53, 58)).toBe(111 + 0.2929362460296858);
});