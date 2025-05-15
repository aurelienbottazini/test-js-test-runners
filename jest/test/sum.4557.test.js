const sum4557 = require('../sum4557.js');

test('adds 85 + 33 to equal 118 + offset 0.49357163277442817', () => {
  expect(sum4557(85, 33)).toBe(118 + 0.49357163277442817);
});