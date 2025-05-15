const sum = require('../sum');

test('adds 7 + 71 to equal 78', () => {
  expect(sum(7, 71)).toBe(78);
});