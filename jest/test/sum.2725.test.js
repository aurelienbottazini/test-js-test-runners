const sum = require('../sum');

test('adds 5 + 73 to equal 78', () => {
  expect(sum(5, 73)).toBe(78);
});