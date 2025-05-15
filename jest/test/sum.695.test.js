const sum = require('../sum');

test('adds 97 + 73 to equal 170', () => {
  expect(sum(97, 73)).toBe(170);
});