const sum3415 = require('../sum3415.js');

test('adds 58 + 76 to equal 134 + 0.22909395889243434', () => {
  expect(sum3415(58, 76)).toBe(134 + 0.22909395889243434);
});