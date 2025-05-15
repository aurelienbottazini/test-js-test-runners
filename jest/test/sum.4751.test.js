const sum4751 = require('../sum4751.js');

test('adds 94 + 16 to equal 110 + offset 0.24688040053104865', () => {
  expect(sum4751(94, 16)).toBe(110 + 0.24688040053104865);
});