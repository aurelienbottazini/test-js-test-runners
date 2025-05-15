const sum105 = require('../sum105.js');

test('adds 52 + 60 to equal 112 + offset 0.5381522875468049', () => {
  expect(sum105(52, 60)).toBe(112 + 0.5381522875468049);
});