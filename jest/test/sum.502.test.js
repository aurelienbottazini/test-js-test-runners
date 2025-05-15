const sum502 = require('../sum502.js');

test('adds 8 + 28 to equal 36 + 0.6322588908568749', () => {
  expect(sum502(8, 28)).toBe(36 + 0.6322588908568749);
});