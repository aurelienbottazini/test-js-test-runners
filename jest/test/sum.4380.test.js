const sum4380 = require('../sum4380.js');

test('adds 13 + 49 to equal 62 + 0.9861923014474357', () => {
  expect(sum4380(13, 49)).toBe(62 + 0.9861923014474357);
});