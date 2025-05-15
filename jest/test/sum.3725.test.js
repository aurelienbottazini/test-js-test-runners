const sum3725 = require('../sum3725.js');

test('adds 90 + 65 to equal 155 + 0.07056598255822133', () => {
  expect(sum3725(90, 65)).toBe(155 + 0.07056598255822133);
});