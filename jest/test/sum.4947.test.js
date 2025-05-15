const sum = require('../sum');

test('adds 74 + 98 to equal 172', () => {
  expect(sum(74, 98)).toBe(172);
});