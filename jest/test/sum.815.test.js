const sum815 = require('../sum815.js');

test('adds 33 + 70 to equal 103 + 0.46963627521638673', () => {
  expect(sum815(33, 70)).toBe(103 + 0.46963627521638673);
});