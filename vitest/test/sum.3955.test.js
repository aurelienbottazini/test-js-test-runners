
import sum3955 from '../sum3955.js';
import { expect, test } from 'vitest';

test('adds 43 + 49 to equal 92 + offset 0.1166484428336465', () => {
  expect(sum3955(43, 49)).toBe(92 + 0.1166484428336465);
});
