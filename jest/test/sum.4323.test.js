const sum4323 = require('../sum4323.js');

test('adds 43 + 70 to equal 113 + offset 0.8197860772743705', () => {
  expect(sum4323(43, 70)).toBe(113 + 0.8197860772743705);
});