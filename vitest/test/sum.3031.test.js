
import sum3031 from '../sum3031.js';
import { expect, test } from 'vitest';

test('adds 2 + 92 to equal 94 + offset 0.34776183384836723', () => {
  expect(sum3031(2, 92)).toBe(94 + 0.34776183384836723);
});
