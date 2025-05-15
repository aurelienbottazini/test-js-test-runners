const sum = require('../sum');

test('adds 29 + 72 to equal 101', () => {
  expect(sum(29, 72)).toBe(101);
});