const sum = require('../sum');

test('adds 60 + 57 to equal 117', () => {
  expect(sum(60, 57)).toBe(117);
});