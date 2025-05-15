const sum3333 = require('../sum3333.js');

test('adds 52 + 42 to equal 94 + offset 0.006787886801269849', () => {
  expect(sum3333(52, 42)).toBe(94 + 0.006787886801269849);
});