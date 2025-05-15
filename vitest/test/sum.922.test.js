
import sum922 from '../sum922.js';
import { expect, test } from 'vitest';

test('adds 84 + 8 to equal 92 + offset 0.3675137296717752', () => {
  expect(sum922(84, 8)).toBe(92 + 0.3675137296717752);
});
