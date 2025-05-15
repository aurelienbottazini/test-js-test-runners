const sum = require('../sum');

test('adds 68 + 57 to equal 125', () => {
  expect(sum(68, 57)).toBe(125);
});