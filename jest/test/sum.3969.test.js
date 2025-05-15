const sum3969 = require('../sum3969.js');

test('adds 56 + 72 to equal 128 + 0.34919970565766434', () => {
  expect(sum3969(56, 72)).toBe(128 + 0.34919970565766434);
});