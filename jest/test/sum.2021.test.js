const sum = require('../sum');

test('adds 69 + 72 to equal 141', () => {
  expect(sum(69, 72)).toBe(141);
});