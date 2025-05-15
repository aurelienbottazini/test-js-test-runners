const sum581 = require('../sum581.js');

test('adds 39 + 71 to equal 110 + 0.282793233293245', () => {
  expect(sum581(39, 71)).toBe(110 + 0.282793233293245);
});