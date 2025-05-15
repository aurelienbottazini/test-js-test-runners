const sum650 = require('../sum650.js');

test('adds 70 + 15 to equal 85 + offset 0.9164407819405959', () => {
  expect(sum650(70, 15)).toBe(85 + 0.9164407819405959);
});