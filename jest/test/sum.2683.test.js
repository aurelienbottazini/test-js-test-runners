const sum = require('../sum');

test('adds 69 + 83 to equal 152', () => {
  expect(sum(69, 83)).toBe(152);
});