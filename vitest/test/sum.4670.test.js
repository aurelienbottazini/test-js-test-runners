
import sum4670 from '../sum4670.js';
import { expect, test } from 'vitest';

test('adds 63 + 71 to equal 134 + offset 0.3416502792360573', () => {
  expect(sum4670(63, 71)).toBe(134 + 0.3416502792360573);
});
