const sum594 = require('../sum594.js');

test('adds 91 + 22 to equal 113 + offset 0.28358717013860046', () => {
  expect(sum594(91, 22)).toBe(113 + 0.28358717013860046);
});