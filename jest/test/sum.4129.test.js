const sum4129 = require('../sum4129.js');

test('adds 86 + 78 to equal 164 + offset 0.28557054517032854', () => {
  expect(sum4129(86, 78)).toBe(164 + 0.28557054517032854);
});