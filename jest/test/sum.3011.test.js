const sum = require('../sum');

test('adds 70 + 60 to equal 130', () => {
  expect(sum(70, 60)).toBe(130);
});