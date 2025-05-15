
import sum4420 from '../sum4420.js';
import { expect, test } from 'vitest';

test('adds 11 + 36 to equal 47 + offset 0.31995261633354055', () => {
  expect(sum4420(11, 36)).toBe(47 + 0.31995261633354055);
});
