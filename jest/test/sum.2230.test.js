const sum2230 = require('../sum2230.js');

test('adds 40 + 46 to equal 86 + offset 0.06761908683851214', () => {
  expect(sum2230(40, 46)).toBe(86 + 0.06761908683851214);
});