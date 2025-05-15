const sum = require('../sum');

test('adds 83 + 29 to equal 112', () => {
  expect(sum(83, 29)).toBe(112);
});