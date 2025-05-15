const sum4347 = require('../sum4347.js');

test('adds 64 + 56 to equal 120 + offset 0.22660530444426952', () => {
  expect(sum4347(64, 56)).toBe(120 + 0.22660530444426952);
});