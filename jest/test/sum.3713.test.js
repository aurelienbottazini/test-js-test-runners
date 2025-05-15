const sum3713 = require('../sum3713.js');

test('adds 71 + 94 to equal 165 + offset 0.8701509951368699', () => {
  expect(sum3713(71, 94)).toBe(165 + 0.8701509951368699);
});