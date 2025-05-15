const sum4523 = require('../sum4523.js');

test('adds 71 + 35 to equal 106 + 0.3229596314366091', () => {
  expect(sum4523(71, 35)).toBe(106 + 0.3229596314366091);
});