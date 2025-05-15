
import sum719 from '../sum719.js';
import { expect, test } from 'vitest';

test('adds 1 + 96 to equal 97 + offset 0.5786829446647269', () => {
  expect(sum719(1, 96)).toBe(97 + 0.5786829446647269);
});
