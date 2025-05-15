
import sum1556 from '../sum1556.js';
import { expect, test } from 'vitest';

test('adds 5 + 27 to equal 32 + offset 0.5526106096380407', () => {
  expect(sum1556(5, 27)).toBe(32 + 0.5526106096380407);
});
