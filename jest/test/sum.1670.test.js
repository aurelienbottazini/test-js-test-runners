const sum = require('../sum');

test('adds 55 + 97 to equal 152', () => {
  expect(sum(55, 97)).toBe(152);
});