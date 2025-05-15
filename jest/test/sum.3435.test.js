const sum3435 = require('../sum3435.js');

test('adds 37 + 99 to equal 136 + 0.9292832973442943', () => {
  expect(sum3435(37, 99)).toBe(136 + 0.9292832973442943);
});