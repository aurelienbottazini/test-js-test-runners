const sum3434 = require('../sum3434.js');

test('adds 46 + 33 to equal 79 + 0.8438416879514486', () => {
  expect(sum3434(46, 33)).toBe(79 + 0.8438416879514486);
});