const sum543 = require('../sum543.js');

test('adds 88 + 4 to equal 92 + offset 0.15586063891787483', () => {
  expect(sum543(88, 4)).toBe(92 + 0.15586063891787483);
});