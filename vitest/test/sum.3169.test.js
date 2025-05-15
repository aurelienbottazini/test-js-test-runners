
import sum3169 from '../sum3169.js';
import { expect, test } from 'vitest';

test('adds 94 + 28 to equal 122 + offset 0.6777347428456612', () => {
  expect(sum3169(94, 28)).toBe(122 + 0.6777347428456612);
});
