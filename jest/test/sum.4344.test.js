const sum4344 = require('../sum4344.js');

test('adds 73 + 15 to equal 88 + offset 0.6828348883164688', () => {
  expect(sum4344(73, 15)).toBe(88 + 0.6828348883164688);
});