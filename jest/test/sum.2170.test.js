const sum2170 = require('../sum2170.js');

test('adds 81 + 21 to equal 102 + offset 0.759649185416909', () => {
  expect(sum2170(81, 21)).toBe(102 + 0.759649185416909);
});