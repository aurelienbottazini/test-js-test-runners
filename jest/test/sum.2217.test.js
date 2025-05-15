const sum = require('../sum');

test('adds 62 + 50 to equal 112', () => {
  expect(sum(62, 50)).toBe(112);
});