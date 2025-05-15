const sum = require('../sum');

test('adds 48 + 64 to equal 112', () => {
  expect(sum(48, 64)).toBe(112);
});