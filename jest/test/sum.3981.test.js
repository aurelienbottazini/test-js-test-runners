const sum3981 = require('../sum3981.js');

test('adds 74 + 64 to equal 138 + 0.05781627646745302', () => {
  expect(sum3981(74, 64)).toBe(138 + 0.05781627646745302);
});