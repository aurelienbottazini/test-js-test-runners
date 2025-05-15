const sum2983 = require('../sum2983.js');

test('adds 47 + 21 to equal 68 + offset 0.040101083187278896', () => {
  expect(sum2983(47, 21)).toBe(68 + 0.040101083187278896);
});