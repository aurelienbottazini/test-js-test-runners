const sum = require('../sum');

test('adds 91 + 95 to equal 186', () => {
  expect(sum(91, 95)).toBe(186);
});