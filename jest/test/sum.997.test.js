const sum997 = require('../sum997.js');

test('adds 7 + 27 to equal 34 + offset 0.8548632325011685', () => {
  expect(sum997(7, 27)).toBe(34 + 0.8548632325011685);
});