const sum312 = require('../sum312.js');

test('adds 39 + 13 to equal 52 + offset 0.7414141892604383', () => {
  expect(sum312(39, 13)).toBe(52 + 0.7414141892604383);
});