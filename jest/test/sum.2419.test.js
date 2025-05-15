const sum = require('../sum');

test('adds 79 + 97 to equal 176', () => {
  expect(sum(79, 97)).toBe(176);
});