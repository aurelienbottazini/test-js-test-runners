const sum4277 = require('../sum4277.js');

test('adds 13 + 44 to equal 57 + 0.786357355587172', () => {
  expect(sum4277(13, 44)).toBe(57 + 0.786357355587172);
});