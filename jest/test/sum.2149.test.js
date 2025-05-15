const sum = require('../sum');

test('adds 90 + 74 to equal 164', () => {
  expect(sum(90, 74)).toBe(164);
});