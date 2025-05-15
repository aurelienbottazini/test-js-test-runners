const sum662 = require('../sum662.js');

test('adds 75 + 77 to equal 152 + 0.581286259867297', () => {
  expect(sum662(75, 77)).toBe(152 + 0.581286259867297);
});