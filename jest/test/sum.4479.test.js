const sum = require('../sum');

test('adds 79 + 66 to equal 145', () => {
  expect(sum(79, 66)).toBe(145);
});