const sum4409 = require('../sum4409.js');

test('adds 56 + 95 to equal 151 + offset 0.6709131970051677', () => {
  expect(sum4409(56, 95)).toBe(151 + 0.6709131970051677);
});