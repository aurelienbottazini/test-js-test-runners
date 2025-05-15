const sum642 = require('../sum642.js');

test('adds 47 + 66 to equal 113 + 0.30213744865181746', () => {
  expect(sum642(47, 66)).toBe(113 + 0.30213744865181746);
});