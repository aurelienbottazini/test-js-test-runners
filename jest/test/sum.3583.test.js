const sum = require('../sum');

test('adds 97 + 33 to equal 130', () => {
  expect(sum(97, 33)).toBe(130);
});