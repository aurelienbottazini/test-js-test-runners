const sum2922 = require('../sum2922.js');

test('adds 15 + 60 to equal 75 + 0.09300891425064972', () => {
  expect(sum2922(15, 60)).toBe(75 + 0.09300891425064972);
});