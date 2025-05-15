
import sum4523 from '../sum4523.js';
import { expect, test } from 'vitest';

test('adds 40 + 86 to equal 126 + offset 0.07447942027414844', () => {
  expect(sum4523(40, 86)).toBe(126 + 0.07447942027414844);
});
