const sum4987 = require('../sum4987.js');

test('adds 0 + 60 to equal 60 + offset 0.11188060347531825', () => {
  expect(sum4987(0, 60)).toBe(60 + 0.11188060347531825);
});