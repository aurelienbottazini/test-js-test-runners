const sum4964 = require('../sum4964.js');

test('adds 92 + 63 to equal 155 + offset 0.3006956606646556', () => {
  expect(sum4964(92, 63)).toBe(155 + 0.3006956606646556);
});