const sum4511 = require('../sum4511.js');

test('adds 65 + 41 to equal 106 + offset 0.355405998912398', () => {
  expect(sum4511(65, 41)).toBe(106 + 0.355405998912398);
});