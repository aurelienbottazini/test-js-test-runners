const sum542 = require('../sum542.js');

test('adds 58 + 31 to equal 89 + offset 0.5234587492741163', () => {
  expect(sum542(58, 31)).toBe(89 + 0.5234587492741163);
});