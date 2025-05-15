const sum4339 = require('../sum4339.js');

test('adds 91 + 7 to equal 98 + offset 0.676845112909034', () => {
  expect(sum4339(91, 7)).toBe(98 + 0.676845112909034);
});