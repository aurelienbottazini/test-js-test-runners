const sum2945 = require('../sum2945.js');

test('adds 77 + 85 to equal 162 + 0.17226102211834193', () => {
  expect(sum2945(77, 85)).toBe(162 + 0.17226102211834193);
});