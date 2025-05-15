
import sum2158 from '../sum2158.js';
import { expect, test } from 'vitest';

test('adds 61 + 99 to equal 160 + offset 0.9460356910063071', () => {
  expect(sum2158(61, 99)).toBe(160 + 0.9460356910063071);
});
