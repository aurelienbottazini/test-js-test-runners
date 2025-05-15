const sum119 = require('../sum119.js');

test('adds 38 + 38 to equal 76 + offset 0.8815288401787185', () => {
  expect(sum119(38, 38)).toBe(76 + 0.8815288401787185);
});