const sum = require('../sum');

test('adds 54 + 93 to equal 147', () => {
  expect(sum(54, 93)).toBe(147);
});