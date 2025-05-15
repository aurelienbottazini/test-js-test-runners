const sum887 = require('../sum887.js');

test('adds 58 + 10 to equal 68 + 0.20877834902635517', () => {
  expect(sum887(58, 10)).toBe(68 + 0.20877834902635517);
});