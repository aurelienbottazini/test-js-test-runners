const sum = require('../sum');

test('adds 97 + 57 to equal 154', () => {
  expect(sum(97, 57)).toBe(154);
});