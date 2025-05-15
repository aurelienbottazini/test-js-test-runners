const sum3186 = require('../sum3186.js');

test('adds 85 + 41 to equal 126 + 0.5796221676464229', () => {
  expect(sum3186(85, 41)).toBe(126 + 0.5796221676464229);
});