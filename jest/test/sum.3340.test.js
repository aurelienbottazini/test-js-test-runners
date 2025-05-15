const sum3340 = require('../sum3340.js');

test('adds 2 + 86 to equal 88 + 0.5697950476710952', () => {
  expect(sum3340(2, 86)).toBe(88 + 0.5697950476710952);
});