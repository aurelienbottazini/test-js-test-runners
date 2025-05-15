const sum874 = require('../sum874.js');

test('adds 56 + 40 to equal 96 + 0.248701943854869', () => {
  expect(sum874(56, 40)).toBe(96 + 0.248701943854869);
});