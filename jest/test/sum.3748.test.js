const sum3748 = require('../sum3748.js');

test('adds 2 + 72 to equal 74 + offset 0.6611673925220032', () => {
  expect(sum3748(2, 72)).toBe(74 + 0.6611673925220032);
});