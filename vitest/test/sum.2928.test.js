
import sum2928 from '../sum2928.js';
import { expect, test } from 'vitest';

test('adds 94 + 47 to equal 141 + offset 0.16042013526895071', () => {
  expect(sum2928(94, 47)).toBe(141 + 0.16042013526895071);
});
