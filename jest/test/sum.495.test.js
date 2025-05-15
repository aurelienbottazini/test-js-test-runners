const sum495 = require('../sum495.js');

test('adds 1 + 40 to equal 41 + 0.4556324560651034', () => {
  expect(sum495(1, 40)).toBe(41 + 0.4556324560651034);
});