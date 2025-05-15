const sum332 = require('../sum332.js');

test('adds 16 + 55 to equal 71 + 0.06988092784642186', () => {
  expect(sum332(16, 55)).toBe(71 + 0.06988092784642186);
});