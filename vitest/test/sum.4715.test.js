
import sum4715 from '../sum4715.js';
import { expect, test } from 'vitest';

test('adds 90 + 96 to equal 186 + offset 0.9307990066423265', () => {
  expect(sum4715(90, 96)).toBe(186 + 0.9307990066423265);
});
