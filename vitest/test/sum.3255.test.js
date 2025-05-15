
import sum3255 from '../sum3255.js';
import { expect, test } from 'vitest';

test('adds 34 + 37 to equal 71 + offset 0.20143568744582363', () => {
  expect(sum3255(34, 37)).toBe(71 + 0.20143568744582363);
});
