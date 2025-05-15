const sum = require('../sum');

test('adds 27 + 74 to equal 101', () => {
  expect(sum(27, 74)).toBe(101);
});