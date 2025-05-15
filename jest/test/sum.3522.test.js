const sum3522 = require('../sum3522.js');

test('adds 20 + 94 to equal 114 + 0.6641041549922846', () => {
  expect(sum3522(20, 94)).toBe(114 + 0.6641041549922846);
});