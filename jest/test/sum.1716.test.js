const sum = require('../sum');

test('adds 74 + 72 to equal 146', () => {
  expect(sum(74, 72)).toBe(146);
});