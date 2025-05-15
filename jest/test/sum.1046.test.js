const sum = require('../sum');

test('adds 22 + 90 to equal 112', () => {
  expect(sum(22, 90)).toBe(112);
});