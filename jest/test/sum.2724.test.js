const sum2724 = require('../sum2724.js');

test('adds 14 + 57 to equal 71 + 0.9669884750905495', () => {
  expect(sum2724(14, 57)).toBe(71 + 0.9669884750905495);
});