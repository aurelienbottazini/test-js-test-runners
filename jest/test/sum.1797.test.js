const sum = require('../sum');

test('adds 81 + 73 to equal 154', () => {
  expect(sum(81, 73)).toBe(154);
});