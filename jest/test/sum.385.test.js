const sum385 = require('../sum385.js');

test('adds 97 + 69 to equal 166 + 0.5554861753542278', () => {
  expect(sum385(97, 69)).toBe(166 + 0.5554861753542278);
});