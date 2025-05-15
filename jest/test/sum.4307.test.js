const sum4307 = require('../sum4307.js');

test('adds 69 + 93 to equal 162 + offset 0.0535205958103151', () => {
  expect(sum4307(69, 93)).toBe(162 + 0.0535205958103151);
});