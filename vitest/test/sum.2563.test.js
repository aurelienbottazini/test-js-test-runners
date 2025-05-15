
import sum2563 from '../sum2563.js';
import { expect, test } from 'vitest';

test('adds 85 + 9 to equal 94 + offset 0.7752895376872337', () => {
  expect(sum2563(85, 9)).toBe(94 + 0.7752895376872337);
});
