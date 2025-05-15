const sum = require('../sum');

test('adds 75 + 73 to equal 148', () => {
  expect(sum(75, 73)).toBe(148);
});