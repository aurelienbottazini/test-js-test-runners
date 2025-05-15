const sum571 = require('../sum571.js');

test('adds 78 + 57 to equal 135 + offset 0.5278701616766985', () => {
  expect(sum571(78, 57)).toBe(135 + 0.5278701616766985);
});