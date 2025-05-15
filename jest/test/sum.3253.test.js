const sum = require('../sum');

test('adds 6 + 72 to equal 78', () => {
  expect(sum(6, 72)).toBe(78);
});