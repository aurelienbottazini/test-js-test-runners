const sum = require('../sum');

test('adds 67 + 42 to equal 109', () => {
  expect(sum(67, 42)).toBe(109);
});