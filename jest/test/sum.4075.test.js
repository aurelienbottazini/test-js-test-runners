const sum = require('../sum');

test('adds 71 + 59 to equal 130', () => {
  expect(sum(71, 59)).toBe(130);
});