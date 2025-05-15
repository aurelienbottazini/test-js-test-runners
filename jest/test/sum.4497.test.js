const sum4497 = require('../sum4497.js');

test('adds 10 + 78 to equal 88 + offset 0.015678860460729638', () => {
  expect(sum4497(10, 78)).toBe(88 + 0.015678860460729638);
});