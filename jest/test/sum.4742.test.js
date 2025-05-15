const sum4742 = require('../sum4742.js');

test('adds 84 + 54 to equal 138 + 0.8558229836686028', () => {
  expect(sum4742(84, 54)).toBe(138 + 0.8558229836686028);
});