const sum = require('../sum');

test('adds 27 + 46 to equal 73', () => {
  expect(sum(27, 46)).toBe(73);
});