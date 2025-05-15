const sum = require('../sum');

test('adds 44 + 68 to equal 112', () => {
  expect(sum(44, 68)).toBe(112);
});