const sum602 = require('../sum602.js');

test('adds 12 + 96 to equal 108 + offset 0.013329247041495518', () => {
  expect(sum602(12, 96)).toBe(108 + 0.013329247041495518);
});