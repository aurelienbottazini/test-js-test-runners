const sum = require('../sum');

test('adds 83 + 60 to equal 143', () => {
  expect(sum(83, 60)).toBe(143);
});