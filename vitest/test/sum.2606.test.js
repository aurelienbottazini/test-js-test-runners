
import sum2606 from '../sum2606.js';
import { expect, test } from 'vitest';

test('adds 52 + 11 to equal 63 + offset 0.15477260871631593', () => {
  expect(sum2606(52, 11)).toBe(63 + 0.15477260871631593);
});
