const sum2182 = require('../sum2182.js');

test('adds 84 + 35 to equal 119 + offset 0.09732908965192733', () => {
  expect(sum2182(84, 35)).toBe(119 + 0.09732908965192733);
});