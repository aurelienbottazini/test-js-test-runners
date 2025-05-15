const sum = require('../sum');

test('adds 93 + 82 to equal 175', () => {
  expect(sum(93, 82)).toBe(175);
});