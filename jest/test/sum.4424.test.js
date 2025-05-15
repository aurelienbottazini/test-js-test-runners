const sum4424 = require('../sum4424.js');

test('adds 33 + 61 to equal 94 + 0.9526790643132507', () => {
  expect(sum4424(33, 61)).toBe(94 + 0.9526790643132507);
});