const sum3968 = require('../sum3968.js');

test('adds 14 + 20 to equal 34 + 0.6014704150265591', () => {
  expect(sum3968(14, 20)).toBe(34 + 0.6014704150265591);
});