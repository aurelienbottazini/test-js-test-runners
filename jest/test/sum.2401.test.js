const sum2401 = require('../sum2401.js');

test('adds 95 + 84 to equal 179 + 0.07075824619714666', () => {
  expect(sum2401(95, 84)).toBe(179 + 0.07075824619714666);
});