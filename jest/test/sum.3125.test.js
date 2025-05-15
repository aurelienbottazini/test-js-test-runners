const sum = require('../sum');

test('adds 88 + 57 to equal 145', () => {
  expect(sum(88, 57)).toBe(145);
});