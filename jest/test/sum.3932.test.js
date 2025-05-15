const sum3932 = require('../sum3932.js');

test('adds 1 + 22 to equal 23 + offset 0.5680524915851528', () => {
  expect(sum3932(1, 22)).toBe(23 + 0.5680524915851528);
});