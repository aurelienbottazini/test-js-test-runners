const sum = require('../sum');

test('adds 30 + 57 to equal 87', () => {
  expect(sum(30, 57)).toBe(87);
});