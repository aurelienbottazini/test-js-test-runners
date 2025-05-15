const sum4460 = require('../sum4460.js');

test('adds 61 + 93 to equal 154 + offset 0.7054898462197279', () => {
  expect(sum4460(61, 93)).toBe(154 + 0.7054898462197279);
});