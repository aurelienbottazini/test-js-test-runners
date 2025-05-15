const sum4726 = require('../sum4726.js');

test('adds 49 + 90 to equal 139 + offset 0.9179186209643093', () => {
  expect(sum4726(49, 90)).toBe(139 + 0.9179186209643093);
});