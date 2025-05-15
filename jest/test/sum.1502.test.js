const sum1502 = require('../sum1502.js');

test('adds 52 + 43 to equal 95 + 0.06607436763272556', () => {
  expect(sum1502(52, 43)).toBe(95 + 0.06607436763272556);
});