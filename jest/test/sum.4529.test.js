const sum4529 = require('../sum4529.js');

test('adds 71 + 55 to equal 126 + 0.4993785954246145', () => {
  expect(sum4529(71, 55)).toBe(126 + 0.4993785954246145);
});