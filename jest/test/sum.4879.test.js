const sum = require('../sum');

test('adds 62 + 60 to equal 122', () => {
  expect(sum(62, 60)).toBe(122);
});