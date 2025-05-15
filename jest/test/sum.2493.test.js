const sum = require('../sum');

test('adds 99 + 46 to equal 145', () => {
  expect(sum(99, 46)).toBe(145);
});