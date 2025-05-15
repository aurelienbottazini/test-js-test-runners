const sum = require('../sum');

test('adds 78 + 74 to equal 152', () => {
  expect(sum(78, 74)).toBe(152);
});