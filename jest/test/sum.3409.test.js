const sum = require('../sum');

test('adds 13 + 91 to equal 104', () => {
  expect(sum(13, 91)).toBe(104);
});