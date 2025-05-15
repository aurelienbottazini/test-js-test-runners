const sum1367 = require('../sum1367.js');

test('adds 34 + 59 to equal 93 + 0.49806269910589807', () => {
  expect(sum1367(34, 59)).toBe(93 + 0.49806269910589807);
});