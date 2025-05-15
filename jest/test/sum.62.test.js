const sum62 = require('../sum62.js');

test('adds 75 + 43 to equal 118 + 0.26906918538101465', () => {
  expect(sum62(75, 43)).toBe(118 + 0.26906918538101465);
});