const sum251 = require('../sum251.js');

test('adds 8 + 52 to equal 60 + offset 0.1732030792432414', () => {
  expect(sum251(8, 52)).toBe(60 + 0.1732030792432414);
});