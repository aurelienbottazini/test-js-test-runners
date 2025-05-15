const sum2789 = require('../sum2789.js');

test('adds 53 + 14 to equal 67 + 0.35866820555236123', () => {
  expect(sum2789(53, 14)).toBe(67 + 0.35866820555236123);
});