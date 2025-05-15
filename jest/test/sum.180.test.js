const sum = require('../sum');

test('adds 22 + 68 to equal 90', () => {
  expect(sum(22, 68)).toBe(90);
});