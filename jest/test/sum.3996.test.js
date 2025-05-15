const sum3996 = require('../sum3996.js');

test('adds 8 + 79 to equal 87 + offset 0.9494276244107702', () => {
  expect(sum3996(8, 79)).toBe(87 + 0.9494276244107702);
});