const sum524 = require('../sum524.js');

test('adds 89 + 75 to equal 164 + offset 0.6347604416978561', () => {
  expect(sum524(89, 75)).toBe(164 + 0.6347604416978561);
});