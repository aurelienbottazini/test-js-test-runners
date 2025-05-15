const sum1306 = require('../sum1306.js');

test('adds 63 + 53 to equal 116 + 0.7115863058003488', () => {
  expect(sum1306(63, 53)).toBe(116 + 0.7115863058003488);
});