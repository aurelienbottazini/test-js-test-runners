
import sum2889 from '../sum2889.js';
import { expect, test } from 'vitest';

test('adds 14 + 95 to equal 109 + offset 0.47714134030857336', () => {
  expect(sum2889(14, 95)).toBe(109 + 0.47714134030857336);
});
