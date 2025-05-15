const sum3426 = require('../sum3426.js');

test('adds 43 + 24 to equal 67 + offset 0.34572244126702323', () => {
  expect(sum3426(43, 24)).toBe(67 + 0.34572244126702323);
});