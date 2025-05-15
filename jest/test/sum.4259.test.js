const sum4259 = require('../sum4259.js');

test('adds 76 + 69 to equal 145 + 0.3453058206195666', () => {
  expect(sum4259(76, 69)).toBe(145 + 0.3453058206195666);
});