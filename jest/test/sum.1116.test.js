const sum = require('../sum');

test('adds 20 + 57 to equal 77', () => {
  expect(sum(20, 57)).toBe(77);
});