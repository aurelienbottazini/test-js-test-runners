const sum583 = require('../sum583.js');

test('adds 6 + 12 to equal 18 + 0.8951041596341298', () => {
  expect(sum583(6, 12)).toBe(18 + 0.8951041596341298);
});