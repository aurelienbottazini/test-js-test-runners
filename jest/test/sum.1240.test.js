const sum = require('../sum');

test('adds 33 + 68 to equal 101', () => {
  expect(sum(33, 68)).toBe(101);
});