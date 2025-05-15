const sum4384 = require('../sum4384.js');

test('adds 48 + 95 to equal 143 + 0.41301213570194006', () => {
  expect(sum4384(48, 95)).toBe(143 + 0.41301213570194006);
});