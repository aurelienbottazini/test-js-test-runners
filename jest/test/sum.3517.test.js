const sum3517 = require('../sum3517.js');

test('adds 21 + 50 to equal 71 + 0.42112909237317653', () => {
  expect(sum3517(21, 50)).toBe(71 + 0.42112909237317653);
});