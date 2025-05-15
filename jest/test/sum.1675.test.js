const sum1675 = require('../sum1675.js');

test('adds 73 + 37 to equal 110 + offset 0.8003258897482297', () => {
  expect(sum1675(73, 37)).toBe(110 + 0.8003258897482297);
});