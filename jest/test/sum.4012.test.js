const sum = require('../sum');

test('adds 62 + 88 to equal 150', () => {
  expect(sum(62, 88)).toBe(150);
});