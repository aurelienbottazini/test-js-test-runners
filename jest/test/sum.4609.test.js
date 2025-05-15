const sum = require('../sum');

test('adds 30 + 82 to equal 112', () => {
  expect(sum(30, 82)).toBe(112);
});