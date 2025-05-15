const sum = require('../sum');

test('adds 97 + 62 to equal 159', () => {
  expect(sum(97, 62)).toBe(159);
});