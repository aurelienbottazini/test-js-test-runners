const sum4855 = require('../sum4855.js');

test('adds 30 + 66 to equal 96 + offset 0.7597245151037634', () => {
  expect(sum4855(30, 66)).toBe(96 + 0.7597245151037634);
});