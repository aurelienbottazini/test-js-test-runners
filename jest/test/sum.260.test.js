const sum = require('../sum');

test('adds 45 + 33 to equal 78', () => {
  expect(sum(45, 33)).toBe(78);
});