const sum1260 = require('../sum1260.js');

test('adds 94 + 81 to equal 175 + 0.25744467816001715', () => {
  expect(sum1260(94, 81)).toBe(175 + 0.25744467816001715);
});