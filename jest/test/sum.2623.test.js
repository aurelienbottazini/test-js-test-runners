const sum2623 = require('../sum2623.js');

test('adds 77 + 24 to equal 101 + offset 0.19593021749917916', () => {
  expect(sum2623(77, 24)).toBe(101 + 0.19593021749917916);
});