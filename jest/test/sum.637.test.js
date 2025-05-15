const sum = require('../sum');

test('adds 57 + 73 to equal 130', () => {
  expect(sum(57, 73)).toBe(130);
});