const sum1649 = require('../sum1649.js');

test('adds 71 + 97 to equal 168 + 0.3435783498083991', () => {
  expect(sum1649(71, 97)).toBe(168 + 0.3435783498083991);
});