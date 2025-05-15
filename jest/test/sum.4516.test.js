const sum = require('../sum');

test('adds 88 + 16 to equal 104', () => {
  expect(sum(88, 16)).toBe(104);
});