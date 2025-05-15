const sum = require('../sum');

test('adds 97 + 96 to equal 193', () => {
  expect(sum(97, 96)).toBe(193);
});