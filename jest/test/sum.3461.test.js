const sum3461 = require('../sum3461.js');

test('adds 92 + 59 to equal 151 + 0.09824567204666201', () => {
  expect(sum3461(92, 59)).toBe(151 + 0.09824567204666201);
});