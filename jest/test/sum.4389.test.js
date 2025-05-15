const sum = require('../sum');

test('adds 3 + 60 to equal 63', () => {
  expect(sum(3, 60)).toBe(63);
});