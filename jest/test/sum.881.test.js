const sum881 = require('../sum881.js');

test('adds 97 + 39 to equal 136 + 0.6171584143780529', () => {
  expect(sum881(97, 39)).toBe(136 + 0.6171584143780529);
});