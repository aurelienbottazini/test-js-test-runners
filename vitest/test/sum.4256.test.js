
import sum4256 from '../sum4256.js';
import { expect, test } from 'vitest';

test('adds 66 + 60 to equal 126 + offset 0.5692989388420058', () => {
  expect(sum4256(66, 60)).toBe(126 + 0.5692989388420058);
});
