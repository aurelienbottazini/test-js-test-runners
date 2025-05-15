const sum1423 = require('../sum1423.js');

test('adds 99 + 59 to equal 158 + 0.23280195848952323', () => {
  expect(sum1423(99, 59)).toBe(158 + 0.23280195848952323);
});