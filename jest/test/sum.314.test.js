const sum314 = require('../sum314.js');

test('adds 43 + 69 to equal 112 + 0.45251508649523187', () => {
  expect(sum314(43, 69)).toBe(112 + 0.45251508649523187);
});