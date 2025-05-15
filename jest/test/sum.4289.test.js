const sum4289 = require('../sum4289.js');

test('adds 20 + 21 to equal 41 + offset 0.4810929863141745', () => {
  expect(sum4289(20, 21)).toBe(41 + 0.4810929863141745);
});