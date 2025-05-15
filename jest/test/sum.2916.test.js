const sum = require('../sum');

test('adds 79 + 96 to equal 175', () => {
  expect(sum(79, 96)).toBe(175);
});