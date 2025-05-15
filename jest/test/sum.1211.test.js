const sum1211 = require('../sum1211.js');

test('adds 55 + 96 to equal 151 + 0.4334144702804529', () => {
  expect(sum1211(55, 96)).toBe(151 + 0.4334144702804529);
});