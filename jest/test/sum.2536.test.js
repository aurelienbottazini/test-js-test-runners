const sum = require('../sum');

test('adds 97 + 88 to equal 185', () => {
  expect(sum(97, 88)).toBe(185);
});