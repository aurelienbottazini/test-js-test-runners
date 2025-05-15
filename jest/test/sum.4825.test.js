const sum4825 = require('../sum4825.js');

test('adds 69 + 66 to equal 135 + 0.4110539486636867', () => {
  expect(sum4825(69, 66)).toBe(135 + 0.4110539486636867);
});