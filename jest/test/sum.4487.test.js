const sum4487 = require('../sum4487.js');

test('adds 2 + 30 to equal 32 + offset 0.34246183899417904', () => {
  expect(sum4487(2, 30)).toBe(32 + 0.34246183899417904);
});