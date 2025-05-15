const sum = require('../sum');

test('adds 78 + 28 to equal 106', () => {
  expect(sum(78, 28)).toBe(106);
});