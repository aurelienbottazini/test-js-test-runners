const sum4042 = require('../sum4042.js');

test('adds 37 + 31 to equal 68 + offset 0.5592160824399969', () => {
  expect(sum4042(37, 31)).toBe(68 + 0.5592160824399969);
});