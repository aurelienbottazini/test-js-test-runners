const sum = require('../sum');

test('adds 39 + 91 to equal 130', () => {
  expect(sum(39, 91)).toBe(130);
});