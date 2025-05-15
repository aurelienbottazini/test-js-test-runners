const sum1781 = require('../sum1781.js');

test('adds 29 + 51 to equal 80 + 0.2891189466395887', () => {
  expect(sum1781(29, 51)).toBe(80 + 0.2891189466395887);
});