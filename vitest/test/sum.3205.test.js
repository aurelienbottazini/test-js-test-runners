
import sum3205 from '../sum3205.js';
import { expect, test } from 'vitest';

test('adds 94 + 64 to equal 158 + offset 0.9570012843544223', () => {
  expect(sum3205(94, 64)).toBe(158 + 0.9570012843544223);
});
