const sum4688 = require('../sum4688.js');

test('adds 50 + 4 to equal 54 + 0.3573535463807218', () => {
  expect(sum4688(50, 4)).toBe(54 + 0.3573535463807218);
});