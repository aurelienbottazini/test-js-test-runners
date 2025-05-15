const sum = require('../sum');

test('adds 33 + 97 to equal 130', () => {
  expect(sum(33, 97)).toBe(130);
});