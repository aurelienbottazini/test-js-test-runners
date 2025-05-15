const sum2941 = require('../sum2941.js');

test('adds 12 + 98 to equal 110 + 0.5998950320420406', () => {
  expect(sum2941(12, 98)).toBe(110 + 0.5998950320420406);
});