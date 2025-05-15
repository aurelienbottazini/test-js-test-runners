
import sum4562 from '../sum4562.js';
import { expect, test } from 'vitest';

test('adds 38 + 86 to equal 124 + offset 0.9358128683117445', () => {
  expect(sum4562(38, 86)).toBe(124 + 0.9358128683117445);
});
