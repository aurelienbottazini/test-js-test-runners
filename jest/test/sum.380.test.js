const sum = require('../sum');

test('adds 40 + 28 to equal 68', () => {
  expect(sum(40, 28)).toBe(68);
});