const sum = require('../sum');

test('adds 94 + 78 to equal 172', () => {
  expect(sum(94, 78)).toBe(172);
});