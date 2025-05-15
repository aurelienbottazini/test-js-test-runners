
import sum2688 from '../sum2688.js';
import { expect, test } from 'vitest';

test('adds 48 + 81 to equal 129 + offset 0.9012590994450026', () => {
  expect(sum2688(48, 81)).toBe(129 + 0.9012590994450026);
});
