const sum3590 = require('../sum3590.js');

test('adds 53 + 6 to equal 59 + 0.9752653096047956', () => {
  expect(sum3590(53, 6)).toBe(59 + 0.9752653096047956);
});