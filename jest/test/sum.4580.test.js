const sum = require('../sum');

test('adds 85 + 46 to equal 131', () => {
  expect(sum(85, 46)).toBe(131);
});