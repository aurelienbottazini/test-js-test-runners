const sum = require('../sum');

test('adds 19 + 60 to equal 79', () => {
  expect(sum(19, 60)).toBe(79);
});