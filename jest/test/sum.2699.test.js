const sum = require('../sum');

test('adds 81 + 49 to equal 130', () => {
  expect(sum(81, 49)).toBe(130);
});