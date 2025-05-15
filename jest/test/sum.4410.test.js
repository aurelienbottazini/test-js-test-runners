const sum4410 = require('../sum4410.js');

test('adds 43 + 34 to equal 77 + offset 0.9879061905458735', () => {
  expect(sum4410(43, 34)).toBe(77 + 0.9879061905458735);
});