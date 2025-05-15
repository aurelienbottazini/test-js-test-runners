const sum = require('../sum');

test('adds 57 + 21 to equal 78', () => {
  expect(sum(57, 21)).toBe(78);
});