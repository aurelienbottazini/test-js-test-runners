const sum = require('../sum');

test('adds 16 + 57 to equal 73', () => {
  expect(sum(16, 57)).toBe(73);
});