const sum1357 = require('../sum1357.js');

test('adds 5 + 9 to equal 14 + 0.3187662684134893', () => {
  expect(sum1357(5, 9)).toBe(14 + 0.3187662684134893);
});