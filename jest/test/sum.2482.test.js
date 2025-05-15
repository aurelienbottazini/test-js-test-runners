const sum = require('../sum');

test('adds 13 + 65 to equal 78', () => {
  expect(sum(13, 65)).toBe(78);
});