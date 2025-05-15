const sum4502 = require('../sum4502.js');

test('adds 88 + 74 to equal 162 + offset 0.7403370009763763', () => {
  expect(sum4502(88, 74)).toBe(162 + 0.7403370009763763);
});