const sum4735 = require('../sum4735.js');

test('adds 88 + 37 to equal 125 + 0.7181840186081564', () => {
  expect(sum4735(88, 37)).toBe(125 + 0.7181840186081564);
});