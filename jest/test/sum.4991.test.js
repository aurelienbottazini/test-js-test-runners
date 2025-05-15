const sum4991 = require('../sum4991.js');

test('adds 94 + 81 to equal 175 + offset 0.8752722589318569', () => {
  expect(sum4991(94, 81)).toBe(175 + 0.8752722589318569);
});