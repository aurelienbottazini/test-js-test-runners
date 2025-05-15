const sum3685 = require('../sum3685.js');

test('adds 58 + 58 to equal 116 + 0.555147714678811', () => {
  expect(sum3685(58, 58)).toBe(116 + 0.555147714678811);
});