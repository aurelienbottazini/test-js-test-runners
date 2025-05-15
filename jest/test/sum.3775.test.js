const sum3775 = require('../sum3775.js');

test('adds 35 + 75 to equal 110 + offset 0.5960136656810004', () => {
  expect(sum3775(35, 75)).toBe(110 + 0.5960136656810004);
});