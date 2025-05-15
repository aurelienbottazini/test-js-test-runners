const sum838 = require('../sum838.js');

test('adds 81 + 94 to equal 175 + offset 0.4192139262736172', () => {
  expect(sum838(81, 94)).toBe(175 + 0.4192139262736172);
});