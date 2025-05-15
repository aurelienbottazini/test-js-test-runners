const sum4304 = require('../sum4304.js');

test('adds 70 + 88 to equal 158 + offset 0.9413709198560882', () => {
  expect(sum4304(70, 88)).toBe(158 + 0.9413709198560882);
});