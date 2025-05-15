
import sum57 from '../sum57.js';
import { expect, test } from 'vitest';

test('adds 4 + 12 to equal 16 + offset 0.20233263097463883', () => {
  expect(sum57(4, 12)).toBe(16 + 0.20233263097463883);
});
