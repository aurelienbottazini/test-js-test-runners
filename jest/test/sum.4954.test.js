const sum4954 = require('../sum4954.js');

test('adds 2 + 93 to equal 95 + offset 0.6628315748804717', () => {
  expect(sum4954(2, 93)).toBe(95 + 0.6628315748804717);
});