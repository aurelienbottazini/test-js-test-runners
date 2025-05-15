const sum3042 = require('../sum3042.js');

test('adds 55 + 77 to equal 132 + 0.9588615586714604', () => {
  expect(sum3042(55, 77)).toBe(132 + 0.9588615586714604);
});