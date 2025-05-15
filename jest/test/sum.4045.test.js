const sum4045 = require('../sum4045.js');

test('adds 69 + 74 to equal 143 + 0.6507246099505465', () => {
  expect(sum4045(69, 74)).toBe(143 + 0.6507246099505465);
});