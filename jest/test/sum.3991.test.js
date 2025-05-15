const sum3991 = require('../sum3991.js');

test('adds 60 + 65 to equal 125 + 0.39863030002993494', () => {
  expect(sum3991(60, 65)).toBe(125 + 0.39863030002993494);
});