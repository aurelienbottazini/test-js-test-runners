const sum3875 = require('../sum3875.js');

test('adds 78 + 28 to equal 106 + offset 0.18564303805746718', () => {
  expect(sum3875(78, 28)).toBe(106 + 0.18564303805746718);
});