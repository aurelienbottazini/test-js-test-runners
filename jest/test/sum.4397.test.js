const sum4397 = require('../sum4397.js');

test('adds 84 + 79 to equal 163 + 0.5235305524003752', () => {
  expect(sum4397(84, 79)).toBe(163 + 0.5235305524003752);
});