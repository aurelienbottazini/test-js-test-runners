const sum = require('../sum');

test('adds 0 + 68 to equal 68', () => {
  expect(sum(0, 68)).toBe(68);
});