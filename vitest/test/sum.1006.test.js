
import sum1006 from '../sum1006.js';
import { expect, test } from 'vitest';

test('adds 52 + 62 to equal 114 + offset 0.8787337274452514', () => {
  expect(sum1006(52, 62)).toBe(114 + 0.8787337274452514);
});
