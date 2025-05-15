const sum = require('../sum');

test('adds 11 + 57 to equal 68', () => {
  expect(sum(11, 57)).toBe(68);
});