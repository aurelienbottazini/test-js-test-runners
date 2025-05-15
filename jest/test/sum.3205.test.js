const sum3205 = require('../sum3205.js');

test('adds 15 + 27 to equal 42 + 0.8070863108531479', () => {
  expect(sum3205(15, 27)).toBe(42 + 0.8070863108531479);
});