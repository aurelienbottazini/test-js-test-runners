const sum = require('../sum');

test('adds 62 + 59 to equal 121', () => {
  expect(sum(62, 59)).toBe(121);
});