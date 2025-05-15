const sum3356 = require('../sum3356.js');

test('adds 86 + 68 to equal 154 + 0.14776436603410392', () => {
  expect(sum3356(86, 68)).toBe(154 + 0.14776436603410392);
});