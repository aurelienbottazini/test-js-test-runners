
import sum1058 from '../sum1058.js';
import { expect, test } from 'vitest';

test('adds 16 + 73 to equal 89 + offset 0.47394383334449497', () => {
  expect(sum1058(16, 73)).toBe(89 + 0.47394383334449497);
});
