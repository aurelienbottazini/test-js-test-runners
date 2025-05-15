const sum = require('../sum');

test('adds 35 + 95 to equal 130', () => {
  expect(sum(35, 95)).toBe(130);
});