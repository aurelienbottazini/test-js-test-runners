const sum4660 = require('../sum4660.js');

test('adds 82 + 71 to equal 153 + 0.5534181516013986', () => {
  expect(sum4660(82, 71)).toBe(153 + 0.5534181516013986);
});