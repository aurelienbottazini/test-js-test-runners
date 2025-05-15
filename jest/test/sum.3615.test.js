const sum = require('../sum');

test('adds 55 + 46 to equal 101', () => {
  expect(sum(55, 46)).toBe(101);
});