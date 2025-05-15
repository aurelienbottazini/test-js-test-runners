const sum4902 = require('../sum4902.js');

test('adds 27 + 19 to equal 46 + offset 0.9887297798375773', () => {
  expect(sum4902(27, 19)).toBe(46 + 0.9887297798375773);
});