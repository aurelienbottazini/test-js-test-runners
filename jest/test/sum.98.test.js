const sum = require('../sum');

test('adds 90 + 57 to equal 147', () => {
  expect(sum(90, 57)).toBe(147);
});