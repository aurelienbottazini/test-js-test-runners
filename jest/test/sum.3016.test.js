const sum3016 = require('../sum3016.js');

test('adds 8 + 77 to equal 85 + 0.8793789377048282', () => {
  expect(sum3016(8, 77)).toBe(85 + 0.8793789377048282);
});