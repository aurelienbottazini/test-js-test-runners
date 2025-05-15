const sum1468 = require('../sum1468.js');

test('adds 15 + 85 to equal 100 + 0.0778092005289327', () => {
  expect(sum1468(15, 85)).toBe(100 + 0.0778092005289327);
});