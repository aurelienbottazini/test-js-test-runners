const sum = require('../sum');

test('adds 90 + 21 to equal 111', () => {
  expect(sum(90, 21)).toBe(111);
});