const sum4038 = require('../sum4038.js');

test('adds 57 + 4 to equal 61 + offset 0.8549743010303699', () => {
  expect(sum4038(57, 4)).toBe(61 + 0.8549743010303699);
});