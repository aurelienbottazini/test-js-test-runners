const sum2958 = require('../sum2958.js');

test('adds 60 + 83 to equal 143 + 0.0630765393093764', () => {
  expect(sum2958(60, 83)).toBe(143 + 0.0630765393093764);
});