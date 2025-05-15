const sum1134 = require('../sum1134.js');

test('adds 16 + 8 to equal 24 + offset 0.8184828674187009', () => {
  expect(sum1134(16, 8)).toBe(24 + 0.8184828674187009);
});