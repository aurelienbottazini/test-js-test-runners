const sum = require('../sum');

test('adds 97 + 46 to equal 143', () => {
  expect(sum(97, 46)).toBe(143);
});