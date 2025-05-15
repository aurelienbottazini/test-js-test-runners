const sum1569 = require('../sum1569.js');

test('adds 89 + 2 to equal 91 + offset 0.8519294531105394', () => {
  expect(sum1569(89, 2)).toBe(91 + 0.8519294531105394);
});