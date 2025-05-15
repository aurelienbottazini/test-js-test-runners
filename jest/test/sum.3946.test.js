const sum3946 = require('../sum3946.js');

test('adds 48 + 90 to equal 138 + offset 0.14472398053487312', () => {
  expect(sum3946(48, 90)).toBe(138 + 0.14472398053487312);
});