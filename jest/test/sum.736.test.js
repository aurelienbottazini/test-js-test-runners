const sum = require('../sum');

test('adds 91 + 39 to equal 130', () => {
  expect(sum(91, 39)).toBe(130);
});