const sum4642 = require('../sum4642.js');

test('adds 97 + 51 to equal 148 + offset 0.47588384157340946', () => {
  expect(sum4642(97, 51)).toBe(148 + 0.47588384157340946);
});