const sum3285 = require('../sum3285.js');

test('adds 19 + 26 to equal 45 + offset 0.22031073808955404', () => {
  expect(sum3285(19, 26)).toBe(45 + 0.22031073808955404);
});