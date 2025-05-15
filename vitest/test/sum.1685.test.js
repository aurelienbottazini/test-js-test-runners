
import sum1685 from '../sum1685.js';
import { expect, test } from 'vitest';

test('adds 64 + 53 to equal 117 + offset 0.09806218236477415', () => {
  expect(sum1685(64, 53)).toBe(117 + 0.09806218236477415);
});
