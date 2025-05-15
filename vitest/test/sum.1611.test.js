
import sum1611 from '../sum1611.js';
import { expect, test } from 'vitest';

test('adds 5 + 57 to equal 62 + offset 0.46231709954538147', () => {
  expect(sum1611(5, 57)).toBe(62 + 0.46231709954538147);
});
