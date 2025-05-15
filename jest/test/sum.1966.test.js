const sum1966 = require('../sum1966.js');

test('adds 84 + 78 to equal 162 + 0.4608935615706262', () => {
  expect(sum1966(84, 78)).toBe(162 + 0.4608935615706262);
});