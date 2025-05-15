const sum94 = require('../sum94.js');

test('adds 63 + 29 to equal 92 + 0.8551445265947648', () => {
  expect(sum94(63, 29)).toBe(92 + 0.8551445265947648);
});