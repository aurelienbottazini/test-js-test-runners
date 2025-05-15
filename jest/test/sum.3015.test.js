const sum3015 = require('../sum3015.js');

test('adds 6 + 59 to equal 65 + offset 0.7649753441144949', () => {
  expect(sum3015(6, 59)).toBe(65 + 0.7649753441144949);
});