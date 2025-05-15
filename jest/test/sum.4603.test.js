const sum4603 = require('../sum4603.js');

test('adds 93 + 71 to equal 164 + offset 0.5624503894993529', () => {
  expect(sum4603(93, 71)).toBe(164 + 0.5624503894993529);
});