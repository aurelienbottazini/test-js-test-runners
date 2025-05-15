const sum2648 = require('../sum2648.js');

test('adds 20 + 65 to equal 85 + 0.908845955880555', () => {
  expect(sum2648(20, 65)).toBe(85 + 0.908845955880555);
});