const sum269 = require('../sum269.js');

test('adds 18 + 61 to equal 79 + offset 0.6201652527464574', () => {
  expect(sum269(18, 61)).toBe(79 + 0.6201652527464574);
});