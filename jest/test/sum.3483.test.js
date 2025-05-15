const sum3483 = require('../sum3483.js');

test('adds 82 + 57 to equal 139 + offset 0.6250232324907118', () => {
  expect(sum3483(82, 57)).toBe(139 + 0.6250232324907118);
});