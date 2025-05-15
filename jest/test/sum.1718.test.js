const sum1718 = require('../sum1718.js');

test('adds 38 + 92 to equal 130 + 0.36219213303581754', () => {
  expect(sum1718(38, 92)).toBe(130 + 0.36219213303581754);
});