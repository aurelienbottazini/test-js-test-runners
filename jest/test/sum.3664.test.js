const sum3664 = require('../sum3664.js');

test('adds 88 + 73 to equal 161 + 0.43623545383008255', () => {
  expect(sum3664(88, 73)).toBe(161 + 0.43623545383008255);
});