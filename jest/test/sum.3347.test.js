const sum3347 = require('../sum3347.js');

test('adds 33 + 29 to equal 62 + offset 0.5811644243968231', () => {
  expect(sum3347(33, 29)).toBe(62 + 0.5811644243968231);
});