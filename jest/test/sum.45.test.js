const sum45 = require('../sum45.js');

test('adds 25 + 84 to equal 109 + 0.6055063017837092', () => {
  expect(sum45(25, 84)).toBe(109 + 0.6055063017837092);
});