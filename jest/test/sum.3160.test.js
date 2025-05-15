const sum3160 = require('../sum3160.js');

test('adds 98 + 89 to equal 187 + 0.5829338485778589', () => {
  expect(sum3160(98, 89)).toBe(187 + 0.5829338485778589);
});