const sum = require('../sum');

test('adds 87 + 43 to equal 130', () => {
  expect(sum(87, 43)).toBe(130);
});