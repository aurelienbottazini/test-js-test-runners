const sum3817 = require('../sum3817.js');

test('adds 36 + 84 to equal 120 + offset 0.2908329673032437', () => {
  expect(sum3817(36, 84)).toBe(120 + 0.2908329673032437);
});