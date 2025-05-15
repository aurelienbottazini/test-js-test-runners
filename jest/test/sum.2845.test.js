const sum = require('../sum');

test('adds 84 + 46 to equal 130', () => {
  expect(sum(84, 46)).toBe(130);
});