const sum1009 = require('../sum1009.js');

test('adds 19 + 31 to equal 50 + 0.8999485398000987', () => {
  expect(sum1009(19, 31)).toBe(50 + 0.8999485398000987);
});