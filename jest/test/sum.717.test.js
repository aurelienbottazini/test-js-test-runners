const sum717 = require('../sum717.js');

test('adds 15 + 71 to equal 86 + offset 0.20201142286948115', () => {
  expect(sum717(15, 71)).toBe(86 + 0.20201142286948115);
});