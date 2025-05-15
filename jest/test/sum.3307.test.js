const sum = require('../sum');

test('adds 70 + 8 to equal 78', () => {
  expect(sum(70, 8)).toBe(78);
});