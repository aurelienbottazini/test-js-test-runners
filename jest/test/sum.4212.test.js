const sum = require('../sum');

test('adds 40 + 90 to equal 130', () => {
  expect(sum(40, 90)).toBe(130);
});