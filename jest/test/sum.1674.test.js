const sum1674 = require('../sum1674.js');

test('adds 2 + 83 to equal 85 + 0.1240726482906066', () => {
  expect(sum1674(2, 83)).toBe(85 + 0.1240726482906066);
});