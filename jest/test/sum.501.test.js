const sum = require('../sum');

test('adds 31 + 73 to equal 104', () => {
  expect(sum(31, 73)).toBe(104);
});