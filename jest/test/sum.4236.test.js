const sum4236 = require('../sum4236.js');

test('adds 31 + 53 to equal 84 + 0.8019319866425334', () => {
  expect(sum4236(31, 53)).toBe(84 + 0.8019319866425334);
});