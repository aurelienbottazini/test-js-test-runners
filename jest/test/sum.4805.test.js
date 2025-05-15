const sum4805 = require('../sum4805.js');

test('adds 32 + 16 to equal 48 + 0.03165429149397736', () => {
  expect(sum4805(32, 16)).toBe(48 + 0.03165429149397736);
});