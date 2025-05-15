const sum1541 = require('../sum1541.js');

test('adds 44 + 88 to equal 132 + 0.5531085865599977', () => {
  expect(sum1541(44, 88)).toBe(132 + 0.5531085865599977);
});