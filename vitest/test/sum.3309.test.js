
import sum3309 from '../sum3309.js';
import { expect, test } from 'vitest';

test('adds 88 + 82 to equal 170 + offset 0.1250119286961422', () => {
  expect(sum3309(88, 82)).toBe(170 + 0.1250119286961422);
});
