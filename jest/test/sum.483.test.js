const sum483 = require('../sum483.js');

test('adds 63 + 80 to equal 143 + 0.6132301032085539', () => {
  expect(sum483(63, 80)).toBe(143 + 0.6132301032085539);
});