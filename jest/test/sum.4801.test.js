const sum4801 = require('../sum4801.js');

test('adds 15 + 27 to equal 42 + 0.930542290509347', () => {
  expect(sum4801(15, 27)).toBe(42 + 0.930542290509347);
});