const sum4930 = require('../sum4930.js');

test('adds 99 + 65 to equal 164 + offset 0.991491039467485', () => {
  expect(sum4930(99, 65)).toBe(164 + 0.991491039467485);
});