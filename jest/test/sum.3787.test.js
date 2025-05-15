const sum = require('../sum');

test('adds 13 + 88 to equal 101', () => {
  expect(sum(13, 88)).toBe(101);
});