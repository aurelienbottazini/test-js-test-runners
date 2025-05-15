const sum570 = require('../sum570.js');

test('adds 17 + 20 to equal 37 + offset 0.3081534283186379', () => {
  expect(sum570(17, 20)).toBe(37 + 0.3081534283186379);
});