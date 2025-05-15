const sum = require('../sum');

test('adds 90 + 96 to equal 186', () => {
  expect(sum(90, 96)).toBe(186);
});