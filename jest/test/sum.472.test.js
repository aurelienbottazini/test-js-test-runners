const sum = require('../sum');

test('adds 13 + 61 to equal 74', () => {
  expect(sum(13, 61)).toBe(74);
});