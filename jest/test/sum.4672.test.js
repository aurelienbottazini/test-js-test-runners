const sum = require('../sum');

test('adds 68 + 73 to equal 141', () => {
  expect(sum(68, 73)).toBe(141);
});