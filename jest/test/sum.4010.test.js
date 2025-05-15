const sum4010 = require('../sum4010.js');

test('adds 81 + 12 to equal 93 + 0.7071637656408005', () => {
  expect(sum4010(81, 12)).toBe(93 + 0.7071637656408005);
});