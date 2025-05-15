const sum1342 = require('../sum1342.js');

test('adds 56 + 10 to equal 66 + offset 0.44602954030646447', () => {
  expect(sum1342(56, 10)).toBe(66 + 0.44602954030646447);
});