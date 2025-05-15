const sum = require('../sum');

test('adds 69 + 4 to equal 73', () => {
  expect(sum(69, 4)).toBe(73);
});