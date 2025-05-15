const sum = require('../sum');

test('adds 85 + 67 to equal 152', () => {
  expect(sum(85, 67)).toBe(152);
});