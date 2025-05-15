const sum = require('../sum');

test('adds 48 + 73 to equal 121', () => {
  expect(sum(48, 73)).toBe(121);
});