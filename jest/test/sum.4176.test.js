const sum = require('../sum');

test('adds 85 + 19 to equal 104', () => {
  expect(sum(85, 19)).toBe(104);
});