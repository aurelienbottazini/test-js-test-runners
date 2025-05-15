const sum54 = require('../sum54.js');

test('adds 96 + 58 to equal 154 + 0.5456421267555457', () => {
  expect(sum54(96, 58)).toBe(154 + 0.5456421267555457);
});