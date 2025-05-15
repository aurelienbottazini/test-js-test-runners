const sum = require('../sum');

test('adds 0 + 78 to equal 78', () => {
  expect(sum(0, 78)).toBe(78);
});