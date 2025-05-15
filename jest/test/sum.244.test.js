const sum = require('../sum');

test('adds 29 + 83 to equal 112', () => {
  expect(sum(29, 83)).toBe(112);
});