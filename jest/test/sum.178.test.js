const sum178 = require('../sum178.js');

test('adds 25 + 80 to equal 105 + 0.06130653729995672', () => {
  expect(sum178(25, 80)).toBe(105 + 0.06130653729995672);
});