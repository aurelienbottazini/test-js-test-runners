const sum429 = require('../sum429.js');

test('adds 96 + 48 to equal 144 + offset 0.755657351538313', () => {
  expect(sum429(96, 48)).toBe(144 + 0.755657351538313);
});