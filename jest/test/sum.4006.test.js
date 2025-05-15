const sum4006 = require('../sum4006.js');

test('adds 95 + 69 to equal 164 + offset 0.7077461419335161', () => {
  expect(sum4006(95, 69)).toBe(164 + 0.7077461419335161);
});