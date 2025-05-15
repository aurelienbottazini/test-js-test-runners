
import sum3250 from '../sum3250.js';
import { expect, test } from 'vitest';

test('adds 94 + 14 to equal 108 + offset 0.1868537645597097', () => {
  expect(sum3250(94, 14)).toBe(108 + 0.1868537645597097);
});
