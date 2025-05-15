const sum = require('../sum');

test('adds 60 + 70 to equal 130', () => {
  expect(sum(60, 70)).toBe(130);
});