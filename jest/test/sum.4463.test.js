const sum4463 = require('../sum4463.js');

test('adds 89 + 49 to equal 138 + 0.36914012099332916', () => {
  expect(sum4463(89, 49)).toBe(138 + 0.36914012099332916);
});