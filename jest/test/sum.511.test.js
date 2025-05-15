const sum511 = require('../sum511.js');

test('adds 58 + 96 to equal 154 + offset 0.007550643237377863', () => {
  expect(sum511(58, 96)).toBe(154 + 0.007550643237377863);
});