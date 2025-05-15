
import sum1788 from '../sum1788.js';
import { expect, test } from 'vitest';

test('adds 19 + 21 to equal 40 + offset 0.27738681587940517', () => {
  expect(sum1788(19, 21)).toBe(40 + 0.27738681587940517);
});
