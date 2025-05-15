const sum1374 = require('../sum1374.js');

test('adds 60 + 44 to equal 104 + 0.07415997620401249', () => {
  expect(sum1374(60, 44)).toBe(104 + 0.07415997620401249);
});