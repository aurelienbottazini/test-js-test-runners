const sum = require('../sum');

test('adds 78 + 57 to equal 135', () => {
  expect(sum(78, 57)).toBe(135);
});