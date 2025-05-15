const sum392 = require('../sum392.js');

test('adds 35 + 72 to equal 107 + offset 0.5299224127185668', () => {
  expect(sum392(35, 72)).toBe(107 + 0.5299224127185668);
});