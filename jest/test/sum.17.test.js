const sum17 = require('../sum17.js');

test('adds 78 + 83 to equal 161 + 0.3447465034521421', () => {
  expect(sum17(78, 83)).toBe(161 + 0.3447465034521421);
});