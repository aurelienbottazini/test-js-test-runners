const sum4536 = require('../sum4536.js');

test('adds 82 + 56 to equal 138 + 0.462611103605723', () => {
  expect(sum4536(82, 56)).toBe(138 + 0.462611103605723);
});