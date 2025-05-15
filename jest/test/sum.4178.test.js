const sum4178 = require('../sum4178.js');

test('adds 90 + 4 to equal 94 + 0.8315502631825341', () => {
  expect(sum4178(90, 4)).toBe(94 + 0.8315502631825341);
});