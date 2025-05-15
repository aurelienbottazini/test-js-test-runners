const sum4675 = require('../sum4675.js');

test('adds 8 + 82 to equal 90 + offset 0.9850170888072206', () => {
  expect(sum4675(8, 82)).toBe(90 + 0.9850170888072206);
});