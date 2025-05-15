const sum1262 = require('../sum1262.js');

test('adds 50 + 59 to equal 109 + offset 0.2711294131472931', () => {
  expect(sum1262(50, 59)).toBe(109 + 0.2711294131472931);
});