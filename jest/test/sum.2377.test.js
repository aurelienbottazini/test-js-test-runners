const sum = require('../sum');

test('adds 13 + 66 to equal 79', () => {
  expect(sum(13, 66)).toBe(79);
});