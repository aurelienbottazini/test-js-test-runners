const sum4487 = require('../sum4487.js');

test('adds 8 + 20 to equal 28 + 0.12641895084615107', () => {
  expect(sum4487(8, 20)).toBe(28 + 0.12641895084615107);
});