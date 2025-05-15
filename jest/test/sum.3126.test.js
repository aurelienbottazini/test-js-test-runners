const sum3126 = require('../sum3126.js');

test('adds 20 + 58 to equal 78 + 0.5970911049623318', () => {
  expect(sum3126(20, 58)).toBe(78 + 0.5970911049623318);
});