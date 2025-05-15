const sum = require('../sum');

test('adds 69 + 93 to equal 162', () => {
  expect(sum(69, 93)).toBe(162);
});