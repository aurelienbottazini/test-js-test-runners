const sum4016 = require('../sum4016.js');

test('adds 19 + 14 to equal 33 + offset 0.860195732160215', () => {
  expect(sum4016(19, 14)).toBe(33 + 0.860195732160215);
});