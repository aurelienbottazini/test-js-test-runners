const sum = require('../sum');

test('adds 74 + 73 to equal 147', () => {
  expect(sum(74, 73)).toBe(147);
});