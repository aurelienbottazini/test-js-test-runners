const sum = require('../sum');

test('adds 90 + 82 to equal 172', () => {
  expect(sum(90, 82)).toBe(172);
});