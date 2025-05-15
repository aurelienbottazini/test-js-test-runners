const sum = require('../sum');

test('adds 41 + 37 to equal 78', () => {
  expect(sum(41, 37)).toBe(78);
});