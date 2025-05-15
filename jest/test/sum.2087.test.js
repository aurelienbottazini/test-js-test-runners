const sum = require('../sum');

test('adds 29 + 49 to equal 78', () => {
  expect(sum(29, 49)).toBe(78);
});