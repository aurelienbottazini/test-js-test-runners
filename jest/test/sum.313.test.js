const sum313 = require('../sum313.js');

test('adds 87 + 66 to equal 153 + 0.4083061380322597', () => {
  expect(sum313(87, 66)).toBe(153 + 0.4083061380322597);
});