const sum = require('../sum');

test('adds 48 + 43 to equal 91', () => {
  expect(sum(48, 43)).toBe(91);
});