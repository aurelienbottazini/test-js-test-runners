const sum4655 = require('../sum4655.js');

test('adds 72 + 66 to equal 138 + offset 0.8209451144492015', () => {
  expect(sum4655(72, 66)).toBe(138 + 0.8209451144492015);
});