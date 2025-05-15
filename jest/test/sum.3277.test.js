const sum3277 = require('../sum3277.js');

test('adds 50 + 43 to equal 93 + 0.5530374510481194', () => {
  expect(sum3277(50, 43)).toBe(93 + 0.5530374510481194);
});