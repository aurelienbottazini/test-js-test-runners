const sum1978 = require('../sum1978.js');

test('adds 77 + 20 to equal 97 + 0.5817668890795687', () => {
  expect(sum1978(77, 20)).toBe(97 + 0.5817668890795687);
});