
import sum2468 from '../sum2468.js';
import { expect, test } from 'vitest';

test('adds 13 + 32 to equal 45 + offset 0.28296914351652913', () => {
  expect(sum2468(13, 32)).toBe(45 + 0.28296914351652913);
});
