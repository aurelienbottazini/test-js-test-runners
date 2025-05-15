const sum2424 = require('../sum2424.js');

test('adds 66 + 35 to equal 101 + 0.4285456671726886', () => {
  expect(sum2424(66, 35)).toBe(101 + 0.4285456671726886);
});